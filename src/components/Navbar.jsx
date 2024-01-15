import { NavLink, useNavigate } from 'react-router-dom'
import pokebola from '../../public/pokebola.png';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {
  const {user, setUser} = useContext(UserContext)

  const navigate = useNavigate()


  const cerrarSesion = () => {
    setUser(null)
    navigate("/")
  }

  const handleLogin = () => {
    setUser({ name: "Adrián Ucha" })
    navigate("/MiPokedex")
  }


  return (
    <>
        <header>
              <NavLink to="/">          
                <img className='logotitulo' src={pokebola} alt='Pokeball'/>
              </NavLink>
          <nav>
              <NavLink to="/">Home</NavLink>
              {user && (
                <>
                  <NavLink to="/MiPokedex">Mi Pokedex</NavLink>
                </>
              )}
              <NavLink to="/Contacto">Contacto</NavLink>
              {user?(
                <>
                  <button className='login' onClick={()=> cerrarSesion()}>Cerrar Sesión</button>
                </>
                
                ):(
                  <button className='login' onClick={()=> handleLogin()}>Iniciar Sesión</button>
                  )}
          </nav>
        </header>
    </>
  )
}

export default Navbar
