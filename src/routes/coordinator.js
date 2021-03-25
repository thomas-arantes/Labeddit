export const goToFeedPage = (history) => {
    history.push("/feed")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToPostPage = (history, id) => {
    history.push(`/feed/${id}`)
}

export const goToLoginPage = (history) => {
    history.push("/")
}