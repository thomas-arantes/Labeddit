import React from 'react'
import { useParams } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardStyled } from '../screens/style'
import { vote } from '../services/vote'
import { baseUrl } from '../constants/baseUrl';

    function CommentsCard(props) {
      const params = useParams();

      const positiveVoteBody = {direction: 1}
      const negativeVoteBody = {direction: -1}

      const positiveVoteComment = () => {
        vote(`${baseUrl}/posts/${params.id}/comment/${props.id}/vote`, positiveVoteBody)
        console.log(params.id)
      }
  
      const negativeVoteComment = () => {
        vote(`${baseUrl}/posts/${params.Id}/comment/${props.id}/vote`, negativeVoteBody)
        console.log("clicou -1")
      }

        console.log(props)
    return (
        <CardStyled>
          <CardContent>
            <Typography  color="textSecondary" gutterBottom>
              {props.username}
            </Typography>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => positiveVoteComment(positiveVoteBody)}
              variant = {"contained"}
              // color = {props.comment.userVoteDirection === 1 ? "primary" : "disabled"}
            > 
              Vote
            </Button>
            <p>{props.votes}</p>
            <Button
              onClick={() => negativeVoteComment(negativeVoteBody)}
              variant = {"contained"}
              //color = {props.comment.userVoteDirection === -1 ? "primary" : "disabled"}
            > 
              Down Vote   
            </Button>
          </CardActions>
        </CardStyled>
      );
    }
    
    export default CommentsCard
