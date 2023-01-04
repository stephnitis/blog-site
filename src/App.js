import Posts from './components/Posts';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Site</h1>
      </header>
      <main>
        <Posts />
        <Comments />
      </main>
    </div>
  );
}

export default App;
