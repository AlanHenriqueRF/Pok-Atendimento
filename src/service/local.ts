import axios, { AxiosRequestConfig } from "axios";

const requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

const BASE_URL = `${process.env.API_LOCAL_URL}`


function getDate(){
    const promise = axios.get(BASE_URL+'/date')
    return promise
}

function getTime(){
    const promise = axios.post(BASE_URL+'/time', requestConfig)
    return promise
}
const apiTimeDate = {getDate,getTime}
export default apiTimeDate