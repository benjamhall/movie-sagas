import React from 'react';
import {useSelector} from 'react-redux';


function Details() {
    
    const details = useSelector(store => store.details)
    //const genres = useSelector(store => store.genres)
    console.log('details are here', details)

    return (
        <>
            <h1>{details.title}</h1>
            <img src={details.poster}></img>
            <p>{details.description}</p>
        </>
    )
}


export default Details;
