import { styled } from "styled-components"

interface PokeProps {
    nome: string
    key: number
    /* register: any */
}

export default function PokemonComponent(props: PokeProps) {
    const { nome,/* register */ } = props
    return (
        <>
            <SelecaoPoke>
                <label htmlFor={nome}>{nome}</label>
                <select className='tamahodiferente' id={nome} /* {...register("pokémon1")} */ required>
                    <option value="Bulbasaur">Bulbasaur</option>
                </select>
            </SelecaoPoke>
        </>
    )
}

const SelecaoPoke = styled.li`
    margin-bottom: 32px;
`
