import { styled } from "styled-components"
import Cabecalho from "../../src/components/Cabecalho"
import check from "../..//public/check.svg"
import Link from "next/link"

export default function Sucesso() {
    return (
        <>
            <Cabecalho nome="Agendar Consulta" info="Recupere seus pokémons em 5 segundos"></Cabecalho>
            <ContainerSuceso>
                <div>
                    <h1>Consulta Agendada</h1>
                    <img src={check.src} alt="logo check" />
                    <h2>Seu agendamento para dia xx/xx/xxxx, às 00h00m,
                        para 0x pokémons foi realizado com sucesso!</h2>
                    <Link href={'/agendar-consulta'}>Fazer Novo Agendamento</Link>
                </div>
            </ContainerSuceso>
        </>
    )
}

const ContainerSuceso = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
    div{
        width: 408px;
        height: 255px;
        border-radius: 8px;
        border: 1px solid #DF8686;
        background-color: #fefafa;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 257px;
        h1{
            font-size: 20px;
            font-weight: 700;
            color: #1D1D1D;
            line-height: 24.2px;
            margin-top: 20px;
            margin-bottom: 29px;
        }
        h2{
            font-weight: 400;
            font-size: 14px;
            line-height: 16.94px;
            color: #747474;
            margin-top: 20px;
            margin-bottom: 20px;
            text-align: center;
        }
        a{
            text-decoration: none;
            width: 197px;
            height: 32px;
            background-color: #E40F0F;
            text-align: center;
            padding-top: 10px;
            border-radius: 30px;
            color: #FFFFFF;
            font-size: 14px;
            line-height: 16.94px;
            font-weight: 700;
        }
    }
`