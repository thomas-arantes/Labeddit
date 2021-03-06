import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';


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
    display: flex;
    height: 45px;
    align-items: center;
    margin: 15px;
`

export const CommentCard = styled.div`
    display: flex;
    height: 45px;
    justify-content: space-evenly;
    align-items: center;
`



