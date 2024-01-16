/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { LoginRegistroContext } from "../context/LoginRegistroContext"
import FormularioInicioSesión from "../components/FormularioInicioSesión"
import FormularioRegistro from "../components/FormularioRegistro"

const InicioSesion = () => {
  const {registro, setRegistro} = useContext(LoginRegistroContext)

  return (
    <>
      <main>
      <section className="seccion1">
        {registro?(
          <FormularioInicioSesión/>
        ):(
          <FormularioRegistro/>
        )}      
      </section>
      <section className="seccion2">
        <img src="../../public/pokebola.png" alt="Logo" />
      </section>      
      </main>
    </>
  )
}

export default InicioSesion
