import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Pokemon } from '../../interfaces/interfaces';


const SelectBar: React.FC = () => {

    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null)

    useEffect(() => {
        try {
            const fetchPokemons = async () => {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")

                const { results } = response.data

                const pokemonPromises = results.map(async (result: { url: string }) => {
                    const pokemonResponse = await axios.get(result.url)
                    return pokemonResponse.data as Pokemon
                })

                const pokemonData = await Promise.all(pokemonPromises)
                setPokemons(pokemonData)
            }
            fetchPokemons()
        } catch (error) {
            console.error(`Error fetching Pokemon data: ${error}`)
        }
    }, [])

    if (!pokemons) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col justify-start items-start gap-2'>
            <h3 className='text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-black text-white uppercase'>Select a Pokemon:</h3>
            <select className='p-2 text-xs xl:p-2 xl:text-base border-0 outline-0 bg-black text-white capitalize' name="pokemons" id="pokemons">
                {pokemons.map((pokemon) => (
                    <option key={pokemon.id} className='bg-zinc-900 outline-0 border-0 capitalize' value={pokemon.name}>{`${pokemon.id >= 10 ? pokemon.id : "0" + pokemon.id} ${pokemon.name}`}
                    </option>
                ))}
            </select>
        </div>
    );
}

export { SelectBar };