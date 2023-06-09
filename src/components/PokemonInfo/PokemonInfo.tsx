import React, { useEffect, useState } from 'react';
import { Pokemon, Ability, Abilities } from '../../interfaces/interfaces';
import axios from 'axios';
import "./PokemonInfo.css"

interface IPokemonInfoProps {
    pokemon: string
}

const PokemonInfo: React.FC<IPokemonInfoProps> = (props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [abilities, setAbilities] = useState<Ability[] | null>(null)

    const pokemonName = props.pokemon

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                setPokemon(response.data)

                const abilityPromises = response.data.abilities.map(async (ability: Abilities) => {
                    const abilitiesResponse = await axios.get(ability.ability.url)
                    return abilitiesResponse.data as Ability
                })
                const abilitiesData = await Promise.all(abilityPromises)
                setAbilities(abilitiesData)
            }
            fetchData()
        }
        catch (error) {
            console.error(error)
        }
    }, [pokemonName])

    if (!pokemon) {
        return <div>Loading...</div>
    }

    if (!abilities) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='flex flex-col gap-8 h-full'>
                <div className='flex flex-row gap-8'>
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
                        <ul>{abilities.map((ability: Ability) => (
                            <>
                                <li key={ability.id} className='list-item text-white font-normal capitalize text-xs sm:text-sm md:text-base lg:text-base xl:text-base'>- {ability.name}
                                    <div key={ability.id + 2} className='absolute rounded-xl p-4 h-max w-[20ch] bg-black '><span className='text-white'>{ability.effect_entries[1].effect.slice(0, 200)}</span></div>
                                </li>
                            </>
                        ))}</ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export { PokemonInfo };