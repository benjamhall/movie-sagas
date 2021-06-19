import React from 'react';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';


function Details() {
    
    const details = useSelector(store => store.details)
    const genres = useSelector(store => store.genres)
    console.log('details are here', details)

    const handleBack = () => {
        console.log('back button clicked')

        history.push('/')
    }

    return (
        <>
            <h1>{details.title}</h1>
            <img src={details.poster}></img>
            <p>{details.description}</p>
            <Button variant="outlined" color="primary" onClick={handleBack}>Back to List</Button>
            <h2>Genres:</h2>
            <ul>
                {genres.map((genre, i) => {
                return (
                <li>{genre.name}</li>
                )
            })
                
            </ul>
        </>
    )
}


export default Details;
