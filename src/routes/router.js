import React from 'react'
import {BrowserRouter, Route, Switch}  from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignupPage/SignUpPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import PostPage from '../screens/PostPage/PostPage'

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