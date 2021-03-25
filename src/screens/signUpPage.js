import React from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import {signUp} from '../services/user'
import {useUnprotectedPage} from '../hooks/useUnprotectedPage'
import {TextField, Button} from '@material-ui/core'
import { LoginContainer, LoginPageContainer } from '../screens/style'

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
      <LoginPageContainer className="App">
        <LoginContainer onSubmit={handleSubmission}>
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
          <Button type="submit">Cadastrar</Button>
        </LoginContainer>
      </LoginPageContainer>
    );
  }
  
export default SignUpPage;