import { useContext } from 'react';
import { SettingsContext } from '../context/settings'

import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';


// styling to limit displayed length of blogpost ...readmore functionality
// infinite scroll / pagination implementation
// click to display full article / comments

const Posts = (props) => {

  const { blogPosts } = useContext(SettingsContext);

  // console.log('props ----->', props);


  return (
    <>
      <Stack spacing={3}>
        {blogPosts.map((post, index) => (
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

export default Posts;