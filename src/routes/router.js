import React from 'react'
import {BrowserRouter, Route, Switch}  from 'react-router-dom'
import LoginPage from '../screens/loginPage'
import SignUpPage from '../screens/signUpPage'
import FeedPage from '../screens/feedPage'
import PostPage from '../screens/postPage'

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route exact path="/feed">
                    <FeedPage />
                </Route>
                <Route exact path="/feed/:id">
                    <PostPage />
                </Route>
                <Route>
                    <p>Erro, página não encontrada</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;