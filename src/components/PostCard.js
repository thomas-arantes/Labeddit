import React from 'react'
import { useParams } from 'react-router-dom'
import {goToPostPage} from '../routes/coordinator'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardStyled, PostCardStyled } from '../screens/style'
import { vote } from '../services/vote'
import { CardActions } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { baseUrl } from '../constants/baseUrl';

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

    const params = useParams();

    const history = useHistory()
    const classes = useStyles();

    const positiveVoteBody = {direction: 1}
    const negativeVoteBody = {direction: -1}

    const positiveVote = () => {
      vote(`${baseUrl}/posts/${params.id}/vote`, positiveVoteBody)
    }

    const negativeVote = () => {
      vote(`${baseUrl}/posts/${params.id}/vote`, negativeVoteBody)
    }

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
          <CardActions>
            <Button 
              onClick={() => positiveVote(positiveVoteBody)}
              variant = {"contained"}
              color = {"primary"}
            > 
              Vote
            </Button>
            <Typography>{props.votes}</Typography>
            <Button
              onClick={() => negativeVote(negativeVoteBody)}
              variant = {"contained"}
              color = {"secondary"}
            > 
              Down Vote 
            </Button>
          </CardActions>
          <div>
            <Button
              onClick={() => goToPostPage(history, props.id)}
              variant = {"outlined"}
              color = {"primary"}
              startIcon={<CommentIcon/>}
            >
              {props.comments} Comentários
            </Button>
          </div>
        </PostCardStyled>
      </CardStyled>
    );
  }
  
  export default PostCard