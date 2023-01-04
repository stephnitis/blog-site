import Posts from './components/Posts';
import Comments from './components/Comments';
import Header from './components/Header'

import { ThemeProvider, createTheme } from '@mui/material/styles';

export const theme = createTheme({

  palette: {
    type: 'light',
    primary: {
      main: '#0b1425',
      dark: '#0b0f39',
      light: '#bbdefb',
    },
    secondary: {
      main: '#50716b',
      light: '#cfece7',
      dark: '#031c18',
    },
    background: {
      default: '#aee3fb',
      paper: '#e3f2fd',
    },
    divider: '#1e1e20',
  },

  typography: {
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
      fontFamily: 'Montserrat',
      display: 'flex'
    },
  }

})

const commentData = {
  title: "Fake article title.",
  author: "grzm",
  comments: [
    {
      id: 1,
      text: "Example comment here.",
      author: "user2",
      children: [
        {
          id: 2,
          text: "Another example comment text.",
          author: "user3",
          children: [
            {
              id: 3,
              text: "Another example comment text.",
              author: "user4",
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "Example comment here 2.",
      author: "user5",
      children: []
    }
  ]
}

function App() {

  return (
    <div className="App">
            <ThemeProvider theme={theme}>

      <header className="App-header">
        <Header />
      </header>
      <main>
        <Posts />
        <div>
          {
            commentData.comments.map((comment) => {
              return (
                <Comments key={comment.id} comment={comment} />
              )
            })
          }
        </div>
      </main>
            </ThemeProvider>
    </div>
  );
}

export default App;
