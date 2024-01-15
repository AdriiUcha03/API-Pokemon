import { createBrowserRouter } from 'react-router-dom'
import LayoutPublico from '../layouts/LayoutPublico'
import LayoutPrivado from '../layouts/LayoutPrivado'
import Home from '../pages/Home'
import MiPoquedex from '../pages/MiPoquedex'
import Contacto from '../pages/Contacto'

const router = createBrowserRouter([
    //Creamos un ruta anidada a la que le pondremos rutas individuales
    {
        path: "/", //En la ruta incial indicamos que cargue el layout publico
        element: <LayoutPublico/>, // que utilzaremos para renderizar los componentes que se ven sin loguear
        children: [ //Con children cremos las rutas secundarias, estas eredan el elemento principal(navbar en este caso).
           {
            index: true, //Con index indicamos la ruta principal del children
            element: <Home/> //Que en este caso es Home
           },{
            path: "/MiPokedex", //Indicamos una segunda ruta que trera el layout con el que verificamos el login
            element: <LayoutPrivado/>,// Con el layout private podemos comprobar el login, y redigirnos a la página personal
            children: [
                {
                    index: true,
                    element: <MiPoquedex/>
                }
            ]
           },{
            path: "/Contacto",
            element: <Contacto/>
           }
        ]
    }
])

export default router
