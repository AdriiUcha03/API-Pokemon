/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { LoginRegistroContext } from "../context/LoginRegistroContext"

const FormularioInicioSesión = () => {
  //Para el cambio de estado entre iniciar sesión y registrarse
  const {registro, setRegistro} = useContext(LoginRegistroContext)

    const handleLogin = () => {
      setRegistro(false)
    }

    //Para recoger los valores de los inputs de manera controlada, y mirar si estan en local storage
    const [values, setValues] = useState({
      correo: "",
      password: ""
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
    }
    //Un estado para mostrar un mensaje de error en caso de campo no válido
    const [validarCorreo, setValidarCorreo] = useState("")

    //Validación de campo correo
    const handelBlur = () => {
      //Cogemos el correo y lo validamos
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      //Si cumple los requisitos no mostrara nada, si no los cumple saltara el mensaje de erro
      if (!values.correo.match(correoRegex)) {
        setValidarCorreo("Correo electrónico no válido");
      } else {
        setValidarCorreo("");
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(values)
    }

  return (
    <>
      <h1>Inicia Sesión</h1>
      <form>
        <label htmlFor="correo" >Correo Electrónico: </label>
        <input 
            id="correo"
            name="correo"
            value={values.correo}
            type="text" 
            placeholder="Introduce tu correo electrónico"
            onChange={handleChange}
            onBlur={handelBlur}
        />
        {validarCorreo && <p className="errorvalidacion">{validarCorreo}</p>}
        <label htmlFor="password" >Contraseña: </label>
        <input 
            id="password"
            name="password"
            type="text" 
            placeholder="Introduce tu contraseña"
            onChange={handleChange}
        />
        <button className="login2" onClick={(e) => handleSubmit(e)}>Iniciar Sesión</button>
      </form>
      <p className="registro">¿No tienes cuenta? <button className="btn-registro" onClick={() => handleLogin()}>Registrate</button></p>
    </>
  )
}

export default FormularioInicioSesión
