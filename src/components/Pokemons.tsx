import { styled } from "styled-components"
import { ObjectNameUrl } from "../../pages/agendar-consulta"
import { useEffect, useState } from "react"
import apiPokemon from "../service/poke"

interface PokeProps {
    nome: string
    key: number
    register: any
    watchRegion: string
}

export type pokemonType = {
    entry_number: number
    pokemon_species: {
        name: string
        url: string
    }
}


export default function PokemonComponent(props: PokeProps) {
    const { nome, register, watchRegion } = props
    const [pokedex, setPokedex] = useState([])
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        if (watchRegion !== 'Selecione sua região' && watchRegion) {
            apiPokemon.getCity(watchRegion)
                .then((data) => {setPokedex(data.data.pokedexes) })
                .catch((e) => { console.log(e.response.data) })
        }
        if (pokedex && pokedex.length > 0) {
            let urlPokemon: ObjectNameUrl = pokedex[1]
            apiPokemon.getPoke(urlPokemon.url)
                .then((data) => { console.log(pokemon);setPokemon(data.data.pokemon_entries) })
                .catch(e => console.log(e))
        }
    }, [watchRegion])
    
    return (
        <>
            <SelecaoPoke>
                <label htmlFor={nome}>{nome}</label>
                <select className='tamahodiferente' id={nome} {...register("pokémon1")} required>
                    <option value={`Escolha seu ${nome}`}>{`Escolha seu ${nome}`}</option>
                    {pokemon && pokemon.map((i: pokemonType) => (
                        <option value={i.pokemon_species.name}>{i.pokemon_species.name}</option>
                    ))}
                </select>
            </SelecaoPoke>
        </>
    )
}

const SelecaoPoke = styled.li`
    margin-bottom: 32px;
`
