import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = `${process.env.API_POKEMON_URL}`

function getRegion() {
    const promise = axios.get(BASE_URL + '/region')
    return promise
}

function getCity(regiao: string) {
    const promise = axios.get(BASE_URL + `/region/${regiao}`)
    return promise
}

function getPoke(url: string) {
    const promise = axios.get(`${url}`)
    return promise
}

const apiPokemon = { getRegion, getCity, getPoke }
export default apiPokemon