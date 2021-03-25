import React from 'react'
import { baseUrl } from '../constants/baseUrl';
import { useProtectPage } from '../hooks/useProtectPage';
import { useRequestData } from '../hooks/useRequestPosts';
import PostCard from '../components/PostCard'
import { useForm } from '../hooks/useForm'
import CardContent from '@material-ui/core/CardContent';
import {TextField, Button} from '@material-ui/core'
import { createPost } from '../services/createPost'
import { CardStyled, FeedContainer, CardFlex } from '../screens/style'



const FeedPage = () => {
    useProtectPage();

    const {form, onChange, resetForm} = useForm({text: "", title: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createPost(form)
        resetForm()
    }

    const feed = useRequestData(`${baseUrl}/posts`, undefined)

    const postList = feed && feed.posts.map((post) => {
      return <PostCard 
      key={post.id} 
      id={post.id} 
      title={post.title} 
      username={post.username} 
      text={post.text}
      votes={post.votesCount}
      comments={post.commentsCount} />
    }) 

    return (
      <FeedContainer>
        <CardStyled>
        <CardContent>
          <CardFlex onSubmit={handleSubmission}>
            <TextField
                label="Título do Post"
                variant="outlined"
                name="title"
                value={form.title}
                onChange={handleInputChange}>
            </TextField>
            <TextField
                label="Texto do Post"
                variant="outlined"
                name="text"
                multiline
                value={form.text}
                onChange={handleInputChange}>
            </TextField>
            <Button type="submit" size="small">Postar</Button>
          </CardFlex>   
        </CardContent>      
      </CardStyled>
        {postList}   
    </FeedContainer>

    );
  }
  
export default FeedPage;