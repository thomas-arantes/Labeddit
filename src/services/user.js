import axios from 'axios'
import { baseUrl } from '../constants/baseUrl'
import { goToFeedPage } from '../routes/coordinator'

export const login = (body, history) => {
    axios.post(`${baseUrl}/login`, body)
    .then(response => {
        console.log(body)
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    })
    .catch(error => {
        alert("Email ou senha inválidos, tente novamente")
        console.log(error.message)
    })
}

export const signUp = (body, history) => {
    axios.post(`${baseUrl}/signup`, body)
    .then(response => {
        console.log(body)
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    })
    .catch(error => {
        console.log(body)
        console.log(error.message)
    })
}