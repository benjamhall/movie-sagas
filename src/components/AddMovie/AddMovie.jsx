import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function AddMovie() {


    return (
        <div>
            <h1>Add Movie</h1>
            <form>
                <TextField id="outlined-basic" label="Movie Title" variant="outlined" />
                <TextField id="outlined-basic" label="Image URL" variant="outlined" />
                <TextField id="outlined-basic" label="Movie Description" variant="outlined" />
                <Select defaultValue="" id="demo-simple-select">
                    <MenuItem value={"Adventure"}>Adventure</MenuItem>
                    <MenuItem value={"Animated"}>Animated</MenuItem>
                    <MenuItem value={"Biographical"}>Biographical</MenuItem>
                    <MenuItem value={"Comedy"}>Comedy</MenuItem>
                    <MenuItem value={"Disaster"}>Diaster</MenuItem>
                    <MenuItem value={"Drama"}>Drama</MenuItem>
                    <MenuItem value={"Epic"}>Epic</MenuItem>
                    <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                    <MenuItem value={"Musical"}>Musical</MenuItem>
                    <MenuItem value={"Romantic"}>Romantic</MenuItem>
                    <MenuItem value={"Science Fiction"}>Science Fiction</MenuItem>
                    <MenuItem value={"Space-Opera"}>Space-Opera</MenuItem>
                    <MenuItem value={"Superhero"}>Superhero</MenuItem>
            </Select>
            </form>


        </div>
            )

}

            export default AddMovie;