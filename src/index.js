import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('POST_MOVIE', postNewMovie)
}

// This function handles the Post Movie request from the Add Movie page and sends the info to the server
function* postNewMovie (action) {
    try {
        const response = yield axios.post('/api/movie', action.payload)
        console.log(response.data);
        yield put({ type: 'FETCH_MOVIES' });
    } catch (error) {
        console.log('error in post New Movie generator', error);
    }
}

// This function gets all the genres from the Database by sending the request to the server
function* fetchAllGenres () {
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all genres', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    }   catch {
            console.log('get all genres error');
    }
}

// This reducer handles the Movie Details 
const details = (state = {}, action) => {
    if(action.type === 'MOVIE_DETAILS') {
        return action.payload;
    }
    return state;
}

// This function sends a get request to the server for all of the movies in the database
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;

        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        case 'FILTER_GENRES':
            const matchGenre = genre => genre.title == action.payload
            // filter out all objects in genre where title isn't 
            return state.filter(matchGenre)
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
