/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { Navigate, Outlet } from "react-router-dom"

const LayoutPrivado = () => {
    
    //Le pasamos el valor que iremos modificando del contexto
    const {user, setUser} = useContext(UserContext)

    //Si esta logueado muestra la Pokedex.
    return (
        user? <Outlet/> : <Navigate to="/"/>
  )
}

export default LayoutPrivado
