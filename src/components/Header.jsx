import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const Header = () => {



  return (
    <>
      <Box
        width="100%"
        alignItems="center"
        sx={{ mb: 5}}
      >
        <AppBar position="static">
          <Toolbar >
            <Typography variant="h1">blog posts</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header;