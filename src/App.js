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

function App() {

  return (
    <div className="App">
            <ThemeProvider theme={theme}>

      <header className="App-header">
        <Header />
      </header>
      <main>
        <Posts />
        <Comments />
      </main>
            </ThemeProvider>
    </div>
  );
}

export default App;
