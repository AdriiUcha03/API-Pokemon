import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import UserProvider from './context/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Para poder pasar el user entre los componentes lo tendremos que hacer a través de user provider, sino, no nos leera el valor */}
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
