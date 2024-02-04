import { styled } from "styled-components";
import Cabecalho from "../../src/components/Cabecalho";
import { useEffect, useState } from "react";
import PokemonComponent from "../../src/components/Pokemons";

export default function AgendarConsulta() {
    const [numpoke, setNumpoke] = useState(['Pokémon 01'])

    return (
        <>
            <Cabecalho nome="Agendar Consulta" info="Recupere seus pokémons em 5 segundos"></Cabecalho>
            <ContainerForm>
                <h1>Preencha o formulário abaixo para agendar sua consulta</h1>
                <form>
                    <InfoBasica>
                        <div>
                            <label htmlFor='Nome'>Nome</label>
                            <input type="text" name='Nome' id="Nome" placeholder="Digite seu nome" />
                            <label htmlFor="Regiao">Região</label>
                            <select id="Regiao" name="Regiao">
                                <option value="Kanto">Kanto</option>
                            </select>
                        </div>
                        <CidadeContainer>
                            <label htmlFor='Sobrenome'>Sobrenome</label>
                            <input type="text" name='Sobrenome' id="Sobrenome" placeholder="Digite seu Sobrenome" />
                            <label htmlFor="Cidade">Cidade</label>
                            <select id="Cidade" name="Cidade">
                                <option value="Pewter City">Selecione sua cidade</option>
                                <option value="Pewter City">Pewter City</option>
                                <option value="Pallet Town">Pallet Town</option>
                                <option value="Veridian City">Veridian City</option>
                            </select>
                        </CidadeContainer>
                    </InfoBasica>
                    <div>
                        <label htmlFor="Pokémon 01">Cadastre seu time</label>
                        <h2>Atendemos até 06 pokémons por vez</h2>
                        <ul>
                            {numpoke.length > 0 && numpoke.length <= 6 && numpoke.map((nome, index) => <PokemonComponent key={index} nome={nome} />)}
                        </ul>
                        <AddPoke onClick={() => {
                            if (numpoke.length < 6) {
                                setNumpoke([...numpoke, `Pokémon 0${(numpoke.length + 1)}`]);
                            } else {
                                alert('Você pode agendar apenas 6 Pokémons')
                            }
                        }} ><label>Adicionar novo pokémon ao time...&nbsp;&nbsp;&nbsp;<span>+</span></label></AddPoke>
                    </div>
                    <HorarioAgenda>
                        <div>
                            <label htmlFor="data">Data para Atendimento</label>
                            <select id="data" name="data">
                                <option value="data">Selecione uma data</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="hora">Horário de Atendimento</label>
                            <select id="hora" name="hora">
                                <option value="hora">Selecione um horário</option>
                            </select>
                        </div>
                    </HorarioAgenda>
                    <InfoDepagamento>
                        <div>
                            <h3>Número de pokémons a serem atendidos:</h3>
                            <h3>Atendimento unitário por pokémon: </h3>
                            <h3>Subtotal:</h3>
                            <h3>Taxa geracional*: </h3>
                            <p>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</p>
                        </div>
                        <div className="finalpag">
                            <h3>01</h3>
                            <h3>R$ 70,00</h3>
                            <h3>R$ 70,00</h3>
                            <h3>R$ 2,10</h3>
                        </div>
                    </InfoDepagamento>
                    <Finalform>
                        <h1>Valor Total: R$ 72,10</h1>
                        <button type="submit" value="Enviar">Concluir Agendamento</button>
                    </Finalform>
                </form>
            </ContainerForm>
        </>
    )
}

const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 32px 0 72px 0 ;
    font-family: "Inter", sans-serif;
    h1{
        font-weight: 600;
        font-size: 24px;
        line-height: 29.05px;
        color: #1D1D1D;
        margin-bottom: 32px;
    }
    h2{
        font-weight: 500;
        font-size: 12px;
        color: #747474;
        line-height: 14.52px;
        margin-top: 8px;
        margin-bottom: 16px;
    }
    label{
        font-weight: 700;
        font-size: 12px;
        line-height: 14.52px;
        color: #1D1D1D;
    }
    input {
        width: calc(265px - 16px);
        height: 43px;
        border-radius: 8px;
        border: solid 1px #D5D5D5;
        padding: 0 0 0 14px;
        color: #747474;
        font-size: 14px;
        line-height: 16.94px;
        font-weight: 500;
        margin-bottom: 28px;
    }
    select{
        width: 265px;
        height: 45px;
        border-radius: 8px ;
        border: solid 1px #D5D5D5;
        padding: 0 0px 0 10px ;
        background-color: #FFFFFF;
        color: #747474;
        font-size: 14px;
        line-height: 16.94px;
        font-weight: 500;

        &.tamahodiferente{
            margin-left: 38px;
            width: 438px;
        }
    }
`

const InfoBasica = styled.div`
    display: flex;
    margin-bottom: 109px;
    div{
        display: flex;
        flex-direction: column;
        label{
            margin-bottom: 8px;
        }
    }

`

const CidadeContainer = styled.div`
    margin-left: 18px;
`

const AddPoke = styled.button`
    border: 1px solid #1D1D1D;
    border-radius: 30px;
    background-color: #FFFFFF;
    width: 253px;
    height: 42px;
    color: #1D1D1D;
    span{
        font-size: 16px;
        line-height: 19.36px;
    }

`

const HorarioAgenda = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;
    border-bottom: 1px #D5D5D5 solid;
    padding-bottom: 32px;
    margin-bottom: 32px;
    div {
        display: flex;
        flex-direction: column;
        margin-right: 18px;
        label {
            margin-bottom: 8px;
        }
    }

`

const InfoDepagamento = styled.div`
    display: flex;
    color:#747474;
    font-weight: 400;
    justify-content: space-between;
    h3{
        font-size:14px;
        line-height: 16.94px;
        margin-bottom: 8px;
    }
    p{
        font-size:8px;
        line-height: 9.68px;
        margin-bottom: 32px;
    }
    div{
        &.finalpag{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }
`

const Finalform = styled.div`
    display:flex;
    justify-content: space-between;
    button{
        width: 183px;
        height: 42px;
        border-radius: 30px;
        background-color: #E40F0F;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 700;
        line-height: 16.94px;
        border: none;
    }
`