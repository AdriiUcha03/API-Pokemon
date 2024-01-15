//Un layout es la estrctura donde se va a navegar, estas se utilizan
//para crear rutas públicas o privadas, a las que solo se puedan acceder con login

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublico = () => {
  return (
    <>
        <Navbar/>
        {/* Outlet es el contexto de las rutas de react-router-dom,
        es decir outlet resuelve la ruta que hay en el router */}
        <Outlet/>
    </>
  )
}

export default LayoutPublico
