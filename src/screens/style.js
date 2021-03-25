import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export const CardStyled = styled(Card)`
    width: 20vw;
    min-width: 560px;
    margin: 15px;
`

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardFlex = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20vh;
`
export const PostCardStyled = styled(CardActions)`
    display: flex;
    justify-content: space-between;
`

export const VotesContainer = styled.div`
    display:flex;
`

export const LoginContainer = styled.form`
    display: flex;
    flex-direction:column;
    height: 28vh;
    width: 340px;
    justify-content: space-between;
    margin-top: 15vh;
    margin-bottom: 10px;
`

export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

