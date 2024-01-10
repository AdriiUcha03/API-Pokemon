import { createBrowserRouter } from 'react-router-dom'
import LayoutPublic from "../layouts/LayoutPublic"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import MiPokedex from "../pages/MiPoquedex"
import Contacto from "../pages/Contacto"


export const router= createBrowserRouter([
  {
    path:"/",
    element: <LayoutPublic/>,
    errorElement:<NotFound/>,
    children: [
      {
        index:true,
        element: <Home/>
      },{
        path:"/MiPokedex",
        element:<MiPokedex/>
      },{
        path:"/Contacto",
        element: <Contacto/>
      }
    ]
  }
])

