import { styled } from "styled-components"

interface cabecalhoProps{
    nome: string,
    info: string
}

export default function Cabecalho(props:cabecalhoProps){
    return (
        <>
            <ContainerCabecalho>
                <div>
                    <h2>Home</h2>
                    <h4>{">"}</h4>
                    <h2>{props.nome}</h2>
                </div>
                <h1>{props.nome}</h1>
                <h3>{props.info}</h3>
            </ContainerCabecalho>
        </>
    )
}

const ContainerCabecalho = styled.div`
    height: 187px;
    font-family: "Inter", sans-serif;
    background-color: #E40F0F;
    div,h1,h3{
        margin-left: 106px;
        margin-bottom: 12px;
    }
    div{
        padding-top: 32px;
        display: flex;
    }
    h1{
        color: #FFFFFF;
        font-size: 32px;
        font-weight: 700;
    }
    h2{
        color: #EEE;
        font-size: 12px;
        font-weight: 700;
    }
    h3{
        color: #EEE;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 0;
    }
    h4{
        color: #EEE;
        font-size: 12px;
        font-weight: 300;
        margin: 0 5px 0 4px;
    }
    
`