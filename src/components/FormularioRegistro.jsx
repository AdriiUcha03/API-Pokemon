/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { LoginRegistroContext } from "../context/LoginRegistroContext"

const FormularioRegistro = () => {
  const {registro, setRegistro} = useContext(LoginRegistroContext)

  const handleLogin = () => {
    setRegistro(true)
  }

   //Para recoger los valores de los inputs de manera controlada, y mirar si estan en local storage
   const [values, setValues] = useState({
    nombre: "",
    correo: "",
    password: "",
    favoritos: []
  })

  //Modificar el valor del objeto con el nombre y el correo
  const handleChange = (e) => {
    const {name , value} = e.target
    const newValues = {
      ...values,
      [name]: value
    }
    //Asignamos el valor
    setValues(newValues)
    validarRegistro(newValues)
  }
  //Un estado para mostrar un mensaje de error en caso de campo no válido
  const [validarNombre, setValidarNombre] = useState("")
  const [validarCorreo, setValidarCorreo] = useState("")
  const [validarPassword, setValidarPassword] = useState("")
  const [buttonDisabled, setButtonDisabled] = useState(true)

  //Desestructuramos lo valores para comprobar que no esten vacíos
  const validarRegistro = ({ nombre, correo, password }) => {
    if (
      //Comprobamos que los campos de error no esten activados y verificamos los valores vacíos.
      validarNombre === "" &&
      validarCorreo === "" &&
      validarPassword === "" &&
      nombre.trim() !== "" &&
      correo.trim() !== "" &&
      password.trim() !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };


  //Validación de Nombre
  const handleBlurNombre = () => {
    const nombreRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/

    if (!values.nombre.match(nombreRegex)) {
      setValidarNombre("Nombre no válido")
      setButtonDisabled(true)
    } else {
      setValidarNombre("")
    }
  }

  //Validación de campo correo
  const handleBlurCorreo = () => {
    //Cogemos el correo y lo validamos
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    //Si cumple los requisitos no mostrara nada, si no los cumple saltara el mensaje de erro
    if (!values.correo.match(correoRegex)) {
      setValidarCorreo("Correo electrónico no válido")
      setButtonDisabled(true)
    } else {
      setValidarCorreo("")
    }
  }

  //Validación de contraseña
  const handleBlurPassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!values.password.match(passwordRegex)) {
      setValidarPassword("Contraseña no valida, debe ser como el ejemplo")
      setButtonDisabled(true)
    } else {
      setValidarPassword("")
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <>
        <h1>Registrate</h1>
      <form>
      <label htmlFor="nombre" >Nombre: </label>
        <input 
            id="nombre"
            name="nombre"
            type="text" 
            placeholder="Introduce tu nombre"
            onChange={handleChange}
            onBlur={handleBlurNombre}
        />
        {validarNombre && <p className="errorvalidacion">{validarNombre}</p>}

        <label htmlFor="correo" >Correo Electrónico: </label>
        <input 
            id="correo"
            name="correo"
            type="text" 
            placeholder="Introduce tu correo electrónico"
            onChange={handleChange}
            onBlur={handleBlurCorreo}
        />
        {validarCorreo && <p className="errorvalidacion">{validarCorreo}</p>}

        <label htmlFor="password" >Contraseña: </label>
        <input 
            id="password"
            name="password"
            type="text" 
            placeholder="Crea una contraseña: C@ntraseña01"
            onChange={handleChange}
            onBlur={handleBlurPassword}
        />
        {validarPassword && <p className="errorvalidacion">{validarPassword}</p>}
        <button className="login2" onClick={(e) => handleSubmit(e)} disabled={buttonDisabled} 
        //Para desabilitar y cambiar el color de boton
        style={{ backgroundColor: buttonDisabled ? '#434A54' : '#ED5564' }}>Registrate</button>
      </form>
      <p className="registro">¿Ya tienes cuenta? <button className="btn-registro" onClick={() => handleLogin()}>Inicia Sesión</button></p>
    </>
  )
}

export default FormularioRegistro