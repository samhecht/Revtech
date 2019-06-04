import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';


export default function Comment(props) {

    if (props.hidden){
        return <div></div>
    }

    const paperStyle = {
        width: '50%',
        height: '100%',
        marginLeft: '30%',
        marginTop: '2%'
    }
    const commentStyle = {
        marginBottom: "5%",
        marginTop: "5%"
    }
    return (
        <React.Fragment>
            <Paper style={paperStyle}>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-evenly'
                >
                <Typography>
                    Student Name
                </Typography>
                <Typography style={commentStyle}>
                    I commented to say how great I am!
                </Typography>
                </Box>
            </Paper>
        </React.Fragment>
    );
}