import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import UserProvider from './context/UserContext'
import RegistroProvider from './context/LoginRegistroContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Para poder pasar el user entre los componentes lo tendremos que hacer a través de user provider, sino, no nos leera el valor */}
    <RegistroProvider>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </RegistroProvider>
  </React.StrictMode>,
)
