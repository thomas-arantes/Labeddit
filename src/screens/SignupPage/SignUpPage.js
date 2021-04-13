import React from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import {signUp} from '../../services/user'
import {useUnprotectedPage} from '../../hooks/useUnprotectedPage'
import {TextField, Button, Typography} from '@material-ui/core'
import { SignupContainer, SignupPageContainer, StyledToolbar } from './styled'
import { goToLoginPage } from '../../routes/coordinator'
import AppBar from '@material-ui/core/AppBar';

const SignUpPage = () => {
    useUnprotectedPage();
    const history = useHistory();
    const {form, onChange} = useForm({username: "", email: "", password: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        
        signUp(form, history)
    }


    return (
      <SignupPageContainer className="App">

        <AppBar position="static">
          <StyledToolbar>
            <Button color="inherit">
              Labeddit
            </Button>
          </StyledToolbar>
        </AppBar>

        <SignupContainer onSubmit={handleSubmission}>
          <Typography>
            Cadastre-se aqui!
          </Typography>
          <TextField 
            label="Nome"
            variant="outlined"
            name="username"
            value={form.username}
            onChange={handleInputChange}
          /> 
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
            Cadastrar
          </Button>
        </SignupContainer>
        <Button 
          onClick={() => goToLoginPage(history)}
          variant = {"text"}
          color = {"primary"}
        >
          Já tem uma conta? Faça Login
        </Button>
      </SignupPageContainer>
    );
  }
  
export default SignUpPage;