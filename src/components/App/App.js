import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// create custom material UI theme
const customTheme = createMuiTheme({
  // theme settings
  palette: {
    primary: {
      main: '#364e6b',
      light: '#E1E2E1',
      dark: '#072640',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3fc2c9',
      light: '#7bf5fc',
      dark: '#009198',
      contrastText: '#000',
    },
  }
});

//This function displays the Routes to the different pages of the app

function App() {

  return (
    <ThemeProvider theme={customTheme}>
    <div className="App">
      
      <h1>The Movies Saga!</h1>
      <Router>
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
    </ThemeProvider>
  );
}


export default App;
