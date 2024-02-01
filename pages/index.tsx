import { styled } from "styled-components"
import pokeHero from "../public/images/pokemon-hero.jpg"



export default function Home() {
  return (
    <>
      <ContainerHome>
        <img src={pokeHero.src} alt="" />
        <h1>Cuidamos bem do seu pokémon,<br/> 
        para ele cuidar bem de você</h1>
      </ContainerHome>
    </>)
}

const ContainerHome = styled.div`
  height: calc(100vh - 176px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;

  img{
    width: 100%;
    height: 100%;
    position: relative;
  }
  h1{
    position: absolute;
    color: #FFFFFF;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

`