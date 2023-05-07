import React, { useEffect, useState } from 'react';
import { Pokemon as PokemonInterface } from '../../interfaces/interfaces';
import axios from "axios"

import "./Pokemon.css"

const Pokemon: React.FC = () => {

    const [pokemon, setPokemon] = useState<PokemonInterface | null>(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
            setPokemon(response.data)
        }
        fetchPokemon()
    }, [])

    if (!pokemon) {
        return <div>Loading...</div>
    }

    console.log(pokemon)

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='uppercase text-white font-black text-xs sm:text-sm md:text-4xl lg:text-2xl xl:text-2xl'>{pokemon.name}</h1>
                <img className='w-24 md:w-56 lg:w-48 xl:w-56' src={`${pokemon.sprites.other["official-artwork"].front_default}`} alt={pokemon.name} />
                <div className='w-full'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <span className='text-white font-bold uppercase'>Type</span>
                        {pokemon.types.map((type) => (
                            <button className={`font-black text-white text-xs uppercase ${type.type.name}-type px-4 py-2 rounded-full`}>
                                {type.type.name}
                            </button>
                        ))}
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export { Pokemon };