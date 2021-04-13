import axios from 'axios'

export const vote = (url, body) => {
    const token = localStorage.getItem("token")


    axios.put(url, body, {
        headers: {
            Authorization: token
        }
    })

    .then((response) => {
        console.log(response)
        alert("Você interagiu com esse post")
    })
    .catch(error => {
        console.log(error.message)
        console.log(body)
    })
}