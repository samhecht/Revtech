import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class profilepage extends React.Component {

    handleSubmit = () => {
console.log("submit")
console.log(document.getElementById("namefield").value)
console.log(document.getElementById("githubfield").value)
console.log(document.getElementById("linkedinfield").value)
console.log(document.getElementById("biofield").value)
    }


    render() {
        return (


            <div className="profilepage">

                <form className="profilepageform">
                    <TextField
                        id="namefield"
                        label="name"
                        placeholder="enter name"
                        margin="normal"
                        required

                    />
                    <TextField
                        id="githubfield"
                        label="github"
                        placeholder="enter github"
                        margin="normal"
                        required
                    />
                    <TextField
                        id="linkedinfield"
                        label="linkedin"
                        placeholder="enter linkedin"
                        margin="normal"
                        required
                    />
                    <TextField
                        id="biofield"
                        label="bio"
                        placeholder="enter bio"
                        margin="normal"
                        rows="4"
                        multiline={true}

                    />
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Submit
      </Button>
                </form>

            </div>
        )
    }
}
