import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();
    //let [newMovie, setNewMovie] = useState({title: '', url: '', description: ''})
    let [title, setTitle] = useState('')
    let [url, setUrl] = useState('')
    let [description, setDescription] = useState('')
    let [genre, setGenre] = useState('')

    const handleTitleChange = (event) => {
        console.log('title event')
        setTitle(event.target.value)
    }

    const handleUrlChange = (event) => {
        console.log('url event')
        setUrl(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        console.log('in handle Description')
        setDescription(event.target.value)
    }

    // This function handles the selection of the genre in the dropdown and sets the genre equal to that value
    const handleGenre = (event) => {
        console.log('in handle genre')
        setGenre(event.target.value)
    }

    const handleCancel = () => {
        console.log('cancel button clicked')
        history.push('/')
    }

    const postMovie = () => {
        console.log(title)
        dispatch({type: 'POST_MOVIE', payload: {title: title, poster: url, description: description, genre_id: genre} })
        history.push('/')
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

                <Select onChange={handleGenre} defaultValue="" id="demo-simple-select" >
                    <MenuItem value={0}></MenuItem>
                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Diaster</MenuItem>
                    <MenuItem value={5}>Drama</MenuItem>
                    <MenuItem value={6}>Epic</MenuItem>
                    <MenuItem value={7}>Fantasy</MenuItem>
                    <MenuItem value={8}>Musical</MenuItem>
                    <MenuItem value={9}>Romantic</MenuItem>
                    <MenuItem value={10}>Science Fiction</MenuItem>
                    <MenuItem value={11}>Space-Opera</MenuItem>
                    <MenuItem value={12}>Superhero</MenuItem>
                </Select>

                <Button onClick={handleCancel} type="submit" variant="contained" color="secondary">Cancel</Button>
                <Button type="submit" variant="contained" color="secondary">Save</Button>
            </form>


        </div>
            )

}

export default AddMovie;