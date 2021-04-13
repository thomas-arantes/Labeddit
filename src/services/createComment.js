import axios from 'axios'

export const createComment = (url, body) => {
    const token = localStorage.getItem("token")

    axios.post(url, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response)
        alert("Comentário feito com sucesso")
    })
    .catch(error => {
        alert("Erro ao criar o comentário, tente novamente mais tarde ")
        console.error(error.message)
    })
}