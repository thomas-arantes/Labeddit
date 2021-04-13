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

export const CardFlex = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20vh;
`