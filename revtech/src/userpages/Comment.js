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
        height: '120px',
        marginLeft: '30%',
        marginTop: '2%'
    }
    return (
        <React.Fragment>
            <Paper style={paperStyle}>
                <Box
                    display='flex'
                    flex-direction='column'
                    justifyContent='space-evenly'
                >
                <Typography>
                    Student Name
                </Typography>
                <Typography>
                    I commented to say how great I am!
                </Typography>
                </Box>
            </Paper>
        </React.Fragment>
    );
}