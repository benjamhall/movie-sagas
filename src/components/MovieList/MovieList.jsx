import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './MovieList.css'

// This function displays the 14 movies on the home page and has an onClick event that brings the user to the details page
function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // Upon page load, this function dispatches the "fetch movies" and "fetch genres" commands to the Generator function in the index.js
    useEffect(() => {
        //This dispatch is retrieving the Movies List with its first stop being the reducer in the index.js
        dispatch({ type: 'FETCH_MOVIES' });
        //This dispatch is getting the genres for each of the movies
        dispatch({ type: 'FETCH_GENRES' })
    }, []);

    // Upon the click of the image of a movie, this function is ran
    const goToDetails = (details) => {
        console.log('The details are', details)
        // This dispatch requests the movie details and stops first at the generator in the reducer
        dispatch({type: 'MOVIE_DETAILS', payload: details})

        // This dispatch requests a filter genres and brings the information found in the details.title
        dispatch({type: 'FILTER_GENRES', payload: details.title})

        // Sends the user to the details page
        history.push('/details')
    }

    // Upon Click, sends the user to the Add Movie Page
    const handleAdd = () => {
        history.push('/add')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <Button onClick={handleAdd} type="submit" variant="contained" color="secondary">Add Movie</Button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={event => goToDetails(movie)} src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;