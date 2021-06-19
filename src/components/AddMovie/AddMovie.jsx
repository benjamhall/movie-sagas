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
            </Select>
            </form>


        </div>
            )

}

            export default AddMovie;