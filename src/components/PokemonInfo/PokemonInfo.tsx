import React, { useEffect, useState } from 'react';
import { Pokemon } from '../../interfaces/interfaces';
import axios from 'axios';

const PokemonInfo: React.FC = () => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null)

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

    return (
        <>
            <div className='flex flex-col gap-8 w-full h-full'>
                <div className='flex flex-row justify-between w-ful'>
                    <div>
                        <h1 className='text-white font-black uppercase text-xs sm:text-sm md:text-base lg:text-base xl:text-base'>Weight</h1>
                        <p className='text-white font-normal text-xs sm:text-sm md:text-base lg:text-base xl:text-base'>{pokemon.weight}kg</p>
                    </div>
                    <div>
                        <h1 className='text-white font-black uppercase text-xs sm:text-sm md:text-base lg:text-base xl:text-base'>Height</h1>
                        <p className='text-white font-normal text-xs sm:text-sm md:text-base lg:text-base xl:text-base'>{pokemon.height}m</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between w-ful'>
                    <div>
                        <h1 className='text-white font-black uppercase text-xs sm:text-sm md:text-base lg:text-base xl:text-base'>Abilities</h1>
                        <ul>{pokemon.abilities.map((ability) => (
                            <li className='text-white font-normal capitalize text-xs sm:text-sm md:text-base lg:text-base xl:text-base'>- {ability.ability.name}</li>
                        ))}</ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export { PokemonInfo };