import logo from './logo.svg';
import './App.css';
import PostList from './components/PostForm'
import GetList from './components/GetList'

function App() {
  return (
    <div className="App">
      <GetList/>
      <PostList/>
    </div>
  );
}

export default App;
