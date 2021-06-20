import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' })
    }, []);

    const goToDetails = (details) => {
        console.log('The details are', details)
        dispatch({type: 'MOVIE_DETAILS', payload: details})
        dispatch({type: 'FILTER_GENRES', payload: details.title})
        history.push('/details')
    }

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