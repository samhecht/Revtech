import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';
import firebase from '../firebase/firebase';
import Button from '@material-ui/core/Button'

export default function Comment(props) {
    const currentEmail = firebase.auth().currentUser.email;
    //eveything should be nice
    if (props.hidden){
        return <div></div>
    }

    

    const handleClick = () => {
        if (props.comment.userEmail === currentEmail){
            const id = props.comKey;
            const commentRef = firebase.database().ref(`comments/${id}`);
            commentRef.remove();
            props.reloadParent(true);
        }
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
    const buttonStyle = {
        marginTop: '0',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '2%',
        width: '20%',
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
                <Button
                    variant='contained'
                    color='primary'
                    style={buttonStyle}
                    onClick={handleClick} 
                >
                    Delete Comment
                </Button>
                </Box>
            </Paper>
        </React.Fragment>
    );
}