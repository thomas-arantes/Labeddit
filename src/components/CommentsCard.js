import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardStyled } from '../screens/style'


    function CommentsCard(props) {


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
            <Button> Vote</Button>
            <p>{props.votes}</p>
            <Button> Down Vote </Button>
          </CardActions>
        </CardStyled>
      );
    }
    
    export default CommentsCard
