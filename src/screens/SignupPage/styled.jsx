import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';


export const SignupContainer = styled.form`
    display: flex;
    flex-direction:column;
    height: 38vh;
    width: 12vw;
    justify-content: space-evenly;
    margin-top: 15vh;
    margin-bottom: 25px;
    background-color: white;
    border-radius: 25px;
    padding: 40px;
`

export const SignupPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between
`