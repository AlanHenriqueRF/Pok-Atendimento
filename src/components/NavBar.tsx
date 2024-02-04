import styled from 'styled-components';
import logo from '../../public/images/white-pokeball.svg'
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface LogoProps {
    tamanho: '259px' | '62px';
}

export default function NavBar() {
    const [aberto, setAberto] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setAberto(false)
        }, 5000)
    }, [])
    
    return (
        <>
            <Blocknav>
                <PokemonLogo tamanho={aberto ? '259px' : '62px'} onMouseOver={() => { setAberto(true) }} onMouseOut={() => setAberto(false)}>
                    <Link href='/'>
                        <img src={logo.src} alt="" />
                        {aberto ? <h1>Centro Pokémon </h1> : <></>}
                    </Link>
                </PokemonLogo>
                <Servicos>
                    <Link href='/quem-somos'>
                        <h1>Quem Somos</h1>
                    </Link>
                    <Link href={'/agendar-consulta'}>
                        <div>
                            <h1>Agendar Consulta</h1>
                        </div>
                    </Link>
                </Servicos>
            </Blocknav>
        </>
    )
}

const Blocknav = styled.div`
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Inter", sans-serif;
    a{
        text-decoration: none;
        color: #000000;
        cursor: pointer;
    }
`

const PokemonLogo = styled.div<LogoProps>`
    margin-left: 83px;
    width: ${props => props.tamanho} ;
    height: 62px;
    background-color: #E40F0F;
    border-radius: 50px;
    display: flex;
    align-items: center;
    animation-name: formatoReduzido;
    animation-duration: 1.5s;
    animation-delay: 5s;
    @keyframes formatoReduzido {
        0%   {width: 259px;}
        100% {width: 62px;}
    }
    a{
        display: flex;
        align-items: center;
        img{
            width: 37px;
            height: 34px;
            margin-left: 13px;
            }
        h1{
            margin-left: 19px;
            color: #FFFFFF;
            font-size: 20px;
            font-weight: 600;
            }
    }
    
`

const Servicos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 291px;
    margin-right: 83px;
    h1{
        color: #000000;
        font-size: 14px;
        font-weight: 400;
    }
    a{
        div{
            width: 172px;
            height: 42px;
            border-radius: 30px;
            background-color: #E40F0F;
            display: flex;
            align-items: center;
            justify-content: center;
            h1{
                color: #FFFFFF;
                font-weight: 700;
            }
        }
    }
`