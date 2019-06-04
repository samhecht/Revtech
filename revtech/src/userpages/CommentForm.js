import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




export default function CommentForm(props) {
    const [comment, setComment] = useState("");

    if (props.hidden) {
        return (<div></div>);
    }

    const handleClick = () => {
        console.log(comment);
        // add comment to database 
        // display comment under the other ones
        setComment("");
    }
    const handleChange = (event) => {
        setComment(event.target.value);
    }
    const paperStyle = {
        width: '50%',
        height: '100%',
        marginLeft: '30%',
        marginTop: '2%'
    }
    const textFieldStyle = {
        margin: '2% 2%'
    }
    const buttonStyle = {
        marginTop: '0',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '2%',
        width: '20%',
    }
    const studentStyle = {
        marginTop: '2%',
    }
    return (
        <React.Fragment>
            <Paper style={paperStyle}>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-evenly'
                >
                    <Typography style={studentStyle}>
                        Student Name
                    </Typography>

                    <TextField
                        id="outlined-with-placeholder"
                        label="Comments..."
                        margin="normal"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={handleChange}
                        value={comment}
                     />
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='flex-end'
                    >

                    
                        <Button
                            variant='contained'
                            color='primary'
                            style={buttonStyle}
                            onClick={handleClick} 
                        >
                            Comment
                        </Button>
                    </Box>
                    
                </Box>
            </Paper>
        </React.Fragment>
    );
}