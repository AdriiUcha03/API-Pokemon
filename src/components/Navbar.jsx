import React from 'react'
import { NavLink } from 'react-router-dom'
import pokebola from '../assets/pokebola.png';

const Navbar = () => {
  return (
    <>
        <header>
          <img className='logotitulo' src={pokebola} alt='Pokeball'/>
          <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/MiPokedex">Mi Pokedex</NavLink>
              <NavLink to="/Contacto">Contacto</NavLink>
          </nav>
          <section className='login'></section>
        </header>
    </>
  )
}

export default Navbar
