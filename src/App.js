import './styles/App.css';
import Header from './components/Header';
import SearchResults from './components/AllBooks';
import AllBooks from './components/AllBooks';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllBooks></AllBooks>
    </div>
  );
}

export default App;

