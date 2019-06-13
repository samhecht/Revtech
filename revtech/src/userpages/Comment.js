import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';


export default function Comment(props) {
    //eveything should be nice
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
                    boxShadow = {7}
                >
                <Typography>
                    {props.comment.userEmail}
                </Typography>
                <Typography style={commentStyle}>
                    {props.comment.commentBody}
                </Typography>
                </Box>
            </Paper>
        </React.Fragment>
    );
}