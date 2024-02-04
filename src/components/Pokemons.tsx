import { styled } from "styled-components"

interface PokeProps {
    nome: string
    key: number
}

export default function PokemonComponent(props: PokeProps) {
    const { nome } = props
    return (
        <>
            <SelecaoPoke>
                <label htmlFor={nome}>{nome}</label>
                <select className='tamahodiferente' id={nome} name={nome}>
                    <option value="Bulbasaur">Bulbasaur</option>
                </select>
            </SelecaoPoke>
        </>
    )
}

const SelecaoPoke = styled.li`
    margin-bottom: 32px;
`
