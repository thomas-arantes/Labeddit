import React from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import {login} from '../services/user'
import {useUnprotectedPage} from '../hooks/useUnprotectedPage'
import {TextField, Button} from '@material-ui/core'
import { LoginContainer, LoginPageContainer } from '../screens/style'

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
            <LoginContainer onSubmit={handleSubmission}>    
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
                <Button type="submit">Entrar</Button>
            </LoginContainer>
            <Button onClick={goToSignUpPage}>Ainda não tem uma conta? Faça seu cadastro</Button>
        </LoginPageContainer>
        );
    }
  
export default LoginPage;