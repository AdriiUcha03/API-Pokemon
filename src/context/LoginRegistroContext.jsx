/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const LoginRegistroContext = createContext(null);

const RegistroProvider = ({children}) => {
    //Usamos un estado para ir modificando si registro es true aparecera el login, si es false
    // aparecera el registro
  const [registro, setRegistro] = useState(true);
    return (
        <LoginRegistroContext.Provider value={{registro, setRegistro}}>
            {children}
        </LoginRegistroContext.Provider>
  );
};

export default RegistroProvider
