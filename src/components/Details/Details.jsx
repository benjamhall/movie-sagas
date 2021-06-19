import React from 'react';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";


function Details() {
    const history = useHistory();
    
    const details = useSelector(store => store.details)
    const genres = useSelector(store => store.genres)
    console.log('details are here', details)

    // This function handles the button that brings the user back to the Movie List
    const handleBack = () => {

        console.log('back button clicked')
        //routes the user back to Movie List
        history.push('/');
    }

    return (
        <>
            <h1>{details.title}</h1>
            <img src={details.poster}></img>
            <p>{details.description}</p>
            
            <h2>Genres:</h2>
            <ul>
                {genres.map((genre) => {
                return (
                <li key={genre.id}>
                    {genre.name}
                </li>
                );
            })}
            </ul>
            <Button variant="outlined" color="primary" onClick={handleBack}>Back to List</Button>
        </>
    )
}


export default Details;
