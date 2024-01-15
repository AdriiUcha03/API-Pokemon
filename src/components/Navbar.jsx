import { NavLink, useNavigate } from 'react-router-dom'
import pokebola from '../../public/pokebola.png';
import { UserContext } from '../context/userContext';
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
    navigate("/dashboard")
  }


  return (
    <>
        <header>
              <NavLink to="/">          
                <img className='logotitulo' src={pokebola} alt='Pokeball'/>
              </NavLink>
          <nav>
              <NavLink to="/">Home</NavLink>
              user?(
                <NavLink to="/MiPokedex">Mi Pokedex</NavLink>
                <button onClick={()=> cerrarSesion()}>Logout</button>
                ):(
                  <button onClick={()=> handleLogin()}>Login</button>
                  )
              <NavLink to="/Contacto">Contacto</NavLink>
              <button className='login'>Iniciar Sesión</button>
          </nav>
        </header>
    </>
  )
}

export default Navbar
