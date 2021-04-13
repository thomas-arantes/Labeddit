import styled from 'styled-components'
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