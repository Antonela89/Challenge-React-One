import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:6000'
})

export const buscar = async (url, setaData) => {
    const respuesta = await api.get(url);
    console.log(respuesta);
    setaData(respuesta.data);
}

