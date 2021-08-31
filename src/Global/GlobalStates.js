import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL } from "../Url"
import GlobalStatesContext from "./GlobalStatesContext"

const GlobalStates = (props) => {

    const [pokemonNames, setPokemonNames] = useState  ([]) 
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);

   

    useEffect (() => {
        getPokemonNames()
    }, [])
    useEffect (()=>{
        const newList = [];
        pokemonNames.forEach((item) => {
          axios.get(item.url)
            .then((response) => {
              newList.push(response.data);
              if (newList.length === 20) {
                const orderedList = newList.sort((a, b) => {
                    return a.id - b.id;
                  });
                setPokemons(orderedList);
              }
            })
            .catch((error) => console.log(error.message));
        });

    }, [pokemonNames])

    const getPokemonNames =() => {
        axios.get (`${BASE_URL}`)
        .then((response) => setPokemonNames (response.data.results))
        .catch((error) => console.log (error.message))
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex}

    return (
    <GlobalStatesContext.Provider value= {data}>
        {props.children}
    </GlobalStatesContext.Provider>
    )
}

export default GlobalStates