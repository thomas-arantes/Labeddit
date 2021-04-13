import React from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import {login} from '../../services/user'
import {useUnprotectedPage} from '../../hooks/useUnprotectedPage'
import {TextField, Button, Typography} from '@material-ui/core'
import { LoginContainer, LoginPageContainer, StyledToolbar } from './styled'
import AppBar from '@material-ui/core/AppBar';

const LoginPage = () => {
    useUnprotectedPage();
    const history = useHistory();
    const {form, onChange} = useForm({email: "", password: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
    }

    const goToSignUpPage = () => {
        history.push("/cadastro")
    }

        return (
        <LoginPageContainer>

            <AppBar position="static">
                <StyledToolbar>
                <Button color="inherit">
                    Labeddit
                </Button>
                </StyledToolbar>
            </AppBar>

            <LoginContainer onSubmit={handleSubmission}>
                <Typography>
                    Faça seu Login!
                </Typography>    
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                />
                <Button 
                    type="submit"
                    variant = {"contained"}
                    color = {"primary"}
                >
                    Entrar
                </Button>
            </LoginContainer>
            <Button 
                onClick={() => goToSignUpPage(history)}
                variant = {"text"}
                color = {"primary"}
            >
                Ainda não tem uma conta? Faça seu cadastro
            </Button>
        </LoginPageContainer>
        );
    }
  
export default LoginPage;