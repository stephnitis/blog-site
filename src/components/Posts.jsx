import { connect } from 'react-redux';

import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';


const Posts = (props) => {

  console.log('props ----->', props);


  return (
    <>
      <Stack spacing={3}>
        {props.allPosts.map((post, index) => (
          <Card key={`post-${index}`} className="posts-container">
            <CardContent >
              <Typography variant="h2">{post.title}</Typography>
              <Typography variant="h3" color="text.secondary">{post.author}</Typography>
              <Typography variant="body">{post.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  )
}

const mapStateToProps = ({ postsReducer }) => {
  return {
    allPosts: postsReducer.blogPosts
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);