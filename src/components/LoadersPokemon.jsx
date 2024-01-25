import { useEffect } from 'react'
import { useState } from 'react'

const LoadersPokemon = () => {
    //Creamos un estado para poder pasar los pokemons que pasamos por pantalla
    //Ponemos un array vacio ya que ahi se almacenar alo que vamos asignando con el set
    const [pokemons, setPokemons] = useState([]) 

    useEffect(() => {
        //Realizamos una llamada asincrona para así esperar a la respuesta de la API
        const getPokemons = async () => {
            //Conseguimos el lista de los pokemons, lo suyo sería páginarlo va a cargar lento
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            const data = await res.json()
            //Esta llamda nos pasa la url individual de cada pokemon, tenemos que hacer una segunda para sacar la información de forma individual
            //Hacemos una segunda llamada para movernos a traves del resultado de la primera, y realizar una segunda llamada para obtener el 
            //Resultado individual de cada pokemon, es decir nos movemos a través de un flujo de datos conocido como promesa
            const promise = data.results.map(async(pokemon) => {
                const result = await fetch(pokemon.url)
                const listaPokemons = await result.json()

                //Una vez lo tenemos cada pokemon de forma individual lo devolvemos como un objeto
                return {
                    id: listaPokemons.id,
                    name: listaPokemons.name,
                    img: listaPokemons.sprites.other.dream_world.front_default
                }
            })
            setPokemons(await Promise.all(promise))
        }
        getPokemons()

    }, []) 

    return (
        pokemons.map(pokemon => {
            return (
                <>
                    <h3>{pokemon.name}</h3>
                    <span>{pokemon.id}</span>
                    <img src={pokemon.img} alt="Imagen del pokemon" />
                </>
            )
        })
      )
    }

export default LoadersPokemon
