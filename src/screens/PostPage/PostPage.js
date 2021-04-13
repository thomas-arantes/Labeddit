import React from 'react'
import { useProtectPage } from '../../hooks/useProtectPage';
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestPosts';
import { baseUrl } from '../../constants/baseUrl';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CommentsCard from '../../components/CommentsCard'
import MakeACommentCard from '../../components/MakeACommentCard'
import { CardStyled, FeedContainer, PostCardStyled, VotesContainer } from './styled'
import { vote } from '../../services/vote'
import { CardActions } from '@material-ui/core';
import Header from '../../components/Header/Header';


const PostPage = () => {
    useProtectPage();
    const params = useParams();
    const data = useRequestData(`${baseUrl}/posts/${params.id}`, [])
    const postDetails = data.post
    const commentList = postDetails && postDetails.comments

    const comments = commentList && commentList.map((comment) => {
      return <CommentsCard
      key={comment.id} 
      id={comment.id} 
      title={comment.title} 
      username={comment.username} 
      text={comment.text}
      votes={comment.votesCount}
      />
    }) 

    const positiveVoteBody = {direction: 1}
    const negativeVoteBody = {direction: -1}

    const positiveVote = () => {
      vote(`${baseUrl}/posts/${params.id}/vote`, positiveVoteBody)
    }

    const negativeVote = () => {
      vote(`${baseUrl}/posts/${params.id}/vote`, negativeVoteBody)
    }
    
    return (
      <FeedContainer className="App">
        <Header/>
            {postDetails && <CardStyled>
              <CardContent>
                <Typography color="textSecondary" component="h2" gutterBottom>
                  {postDetails.username}
                </Typography>
                <Typography variant="h5" component="h2">
                {postDetails.title}
                </Typography>
                <Typography variant="body2" component="p">
                {postDetails.text}
                </Typography>
              </CardContent>

              <PostCardStyled>
                <CardActions>
                  <Button 
                    onClick={() => positiveVote(positiveVoteBody)}
                    variant = {"contained"}
                    color = {postDetails.userVoteDirection ===  1 ? "primary" : "disabled"}
                  > 
                    Vote
                  </Button>
                  <p>{postDetails.votesCount}</p>
                  <Button 
                    onClick={() => negativeVote(negativeVoteBody)}
                    variant = {"contained"}
                    color = {postDetails.userVoteDirection ===  -1 ? "secondary" : "disabled"}
                  > 
                    Down Vote 
                  </Button>
                </CardActions>
                <p>{postDetails.commentsCount} Comentários</p>
              </PostCardStyled>
            </CardStyled>}
        
        <MakeACommentCard />
        <div>
          {comments}
        </div>
      </FeedContainer>

    );
  }
  
export default PostPage;