import React from 'react'
import { baseUrl } from '../constants/baseUrl';
import { useForm } from '../hooks/useForm'
import CardContent from '@material-ui/core/CardContent';
import { createComment } from '../services/createComment'
import { useParams } from 'react-router-dom';
import {TextField, Button} from '@material-ui/core'
import { CardStyled, CommentCard } from '../screens/style'

function MakeACommentCard() {

    const {form, onChange, resetForm} = useForm({text: ""})
    const params = useParams();
    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createComment(`${baseUrl}/posts/${params.id}/comment`,form)
        resetForm()
    }

    return (
        <CardStyled>
            <CardContent>
                <form onSubmit={handleSubmission}>
                    <CommentCard>
                        <TextField 
                            label="Caixa de comentário"
                            variant="outlined"
                            name="text"
                            multiline
                            value={form.text}
                            onChange={handleInputChange} />
                            
                            <Button 
                                type="submit"
                                variant = {"contained"}
                                color = {"primary"}
                            >
                                Comentar
                            </Button>
                    </CommentCard>
                </form>
            </CardContent>
        </CardStyled>
    )
}

export default MakeACommentCard