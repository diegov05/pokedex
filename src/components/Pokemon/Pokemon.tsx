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
                    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-2'>
                        <span className='text-white font-bold uppercase text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>Type</span>
                        <div className='flex flex-row gap-2'>
                            {pokemon.types.map((type) => (
                                <button className={`flex flex-col justify-center items-center font-black text-white text-[10px] uppercase ${type.type.name}-type px-2 sm:text-[10px] md:text-base lg:text-base xl:text-base md:px-2 md:py-1 lg:px-4 lg:py-2 xl:px-8 rounded-full`}>
                                    {type.type.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export { Pokemon };