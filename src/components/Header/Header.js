import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled'
import Button from '@material-ui/core/Button';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator';
import { useHistory } from "react-router-dom"


export default function Header() {

    const history = useHistory()

    const logout = () => {
      localStorage.removeItem("token")
      goToLoginPage(history)
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
            <Button onClick={() => goToFeedPage(history)} color="inherit">
                Labeddit
            </Button>
            <Button 
                onClick={() => logout()} 
                // onClick={() => goToLoginPage(history)}
                color="inherit"
            >
                Logout
            </Button>
            </StyledToolbar>
        </AppBar>
    );
}