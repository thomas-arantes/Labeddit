import axios from 'axios'
import { baseUrl } from '../constants/baseUrl'

export const createPost = (body) => {
    const token = localStorage.getItem("token")

    axios.post(`${baseUrl}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response)
        alert("Post criado com sucesso! ")
    })
    .catch(error => {
        alert("Erro ao criar o post, tente novamente mais tarde ")
        console.log(error.message)
    })
}