import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function AddMovie() {
    const dispatch = useDispatch();
    //let [newMovie, setNewMovie] = useState({title: '', url: '', description: ''})
    let [title, setTitle] = useState('')
    let [url, setUrl] = useState('')
    let [description, setDescription] = useState('')

    const handleTitleChange = (event) => {
        console.log('title event')
        setTitle(event.target.value)
    }

    const handleUrlChange = (event) => {
        console.log('url event')
        setUrl(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleDropdown = (event) => {
        console.log('handle dropdown')
        setDropdown(event.target.value)
    }

    const postMovie = (newMovie) => {
        console.log(title)
        dispatch({type: 'POST_Movie', payload: {title: newMovie.title, poster: newMovie.url, description: newMovie.description} })
    }

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={postMovie}>
                <TextField value={title} 
                    onChange ={handleTitleChange} 
                    id="outlined-title" label="Movie Title" variant="outlined" />

                <TextField value={url} 
                    onChange={handleUrlChange}
                    id="outlined-url" label="Image URL" variant="outlined" />

                <TextField value={description}
                    onChange={handleDescriptionChange}
                    id="outlined-basic" label="Movie Description" variant="outlined" />

                <Select onChange={handleDropdown} defaultValue="" id="demo-simple-select" >
                    <MenuItem value
                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Diaster</MenuItem>
                    <MenuItem value={"Drama"}>Drama</MenuItem>
                    <MenuItem value={"Epic"}>Epic</MenuItem>
                    <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                    <MenuItem value={"Musical"}>Musical</MenuItem>
                    <MenuItem value={"Romantic"}>Romantic</MenuItem>
                    <MenuItem value={"Science Fiction"}>Science Fiction</MenuItem>
                    <MenuItem value={"Space-Opera"}>Space-Opera</MenuItem>
                    <MenuItem value={"Superhero"}>Superhero</MenuItem>
                </Select>

                <Button type="submit" variant="contained" color="secondary">Cancel</Button>
                <Button type="submit" variant="contained" color="secondary">Save</Button>
            </form>


        </div>
            )

}

export default AddMovie;