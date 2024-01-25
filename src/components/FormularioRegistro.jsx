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
        />
        <label htmlFor="correo" >Correo Electrónico: </label>
        <input 
            id="correo"
            name="correo"
            type="text" 
            placeholder="Introduce tu correo electrónico"
        />
        <label htmlFor="password" >Contraseña: </label>
        <input 
            id="password"
            name="password"
            type="text" 
            placeholder="Crea una contraseña: C@ntraseña01"
        />
        <button className="login2" onClick={(e) => handleSubmit(e)}>Registrate</button>
      </form>
      <p className="registro">¿Ya tienes cuenta? <button className="btn-registro" onClick={() => handleLogin()}>Inicia Sesión</button></p>
    </>
  )
}

export default FormularioRegistro