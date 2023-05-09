import React, { useEffect, useState } from 'react';
import { Pokemon as PokemonInterface } from '../../interfaces/interfaces';
import axios from "axios"

import "./Pokemon.css"

export interface IPokemonProps {
    pokemon: string
}

const Pokemon: React.FC<IPokemonProps> = (props) => {

    const [pokemon, setPokemon] = useState<PokemonInterface | null>(null)

    const pokemonName = props.pokemon

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            setPokemon(response.data)
        }
        fetchPokemon()
    }, [pokemonName])

    if (!pokemon) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h1 className='uppercase text-white font-black text-xs sm:text-sm md:text-4xl lg:text-2xl xl:text-2xl'>{pokemon.name}</h1>
                <img className='w-24 md:w-56 lg:w-48 xl:w-56' src={`${pokemon.sprites.other["official-artwork"].front_default}`} alt={pokemon.name} />
                <div className='w-full'>
                    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-2'>
                        <div className='flex flex-row gap-2'>
                            {pokemon.types.map((type) => (
                                <button className={`flex flex-col justify-center items-center font-black text-white text-[10px] uppercase ${type.type.name}-type sm:text-[10px] md:text-base lg:text-base xl:text-base px-6 py-2 lg:px-4 lg:py-2 xl:px-8 rounded-full transition-all hover:opacity-90`}>
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