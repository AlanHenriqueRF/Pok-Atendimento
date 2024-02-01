import { styled } from "styled-components"

export default function Footer() {
    return (
        <>
            <Footerbox>
                <h1>Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.</h1>
            </Footerbox>
        </>
    )
}

const Footerbox = styled.div`
    display: flex;
    position: fixed;
    bottom:0;
    width:100vw;
    height:72px;
    align-items: center;
    justify-content:center;
    background-color: #1D1D1D;
    font-family: "Inter", sans-serif;
    h1{
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 400;
    }
`