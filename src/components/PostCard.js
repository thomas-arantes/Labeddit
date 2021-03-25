import React from 'react'
import {goToPostPage} from '../routes/coordinator'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardStyled, PostCardStyled, VotesContainer } from '../screens/style'
import { vote } from '../services/vote'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

    function PostCard(props) {
    const history = useHistory()
    const classes = useStyles();

    return (
      <CardStyled  className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.username}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.text}
          </Typography>
        </CardContent>
        <PostCardStyled>
          <VotesContainer>
            <Button> Vote</Button>
            <p>{props.votes}</p>
            <Button> Down Vote </Button>
          </VotesContainer>
          <div onClick={() => goToPostPage(history, props.id)}>
            <p>{props.comments} Comentários</p>
          </div>
        </PostCardStyled>
      </CardStyled>
    );
  }
  
  export default PostCard