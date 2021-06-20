import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import {useHistory} from 'react-router-dom';

function App() {
  const history = useHistory();
  
  const handleAdd = () => {
    history.push('/add')
  }

  return (
    <div className="App">
      
      <h1>The Movies Saga!</h1>
      <Router>
        <Button onClick={handleAdd}>Add Movie</Button>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/add" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
