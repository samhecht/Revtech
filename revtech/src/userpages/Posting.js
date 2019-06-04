import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Comment from './Comment';


export default function Posting() {

    const [hideComments, setHideComments] = useState(true);

    const handleClick = () => {
        if (hideComments) {
            setHideComments(false);
        } else {
            setHideComments(true);
        }
    }
    const paperStyle = {
        width: '60%',
        height: '250px',
        marginLeft: '20%',
        marginTop: '4%',
        textAlign: 'center'
    }
    return (
        <React.Fragment>
            
                
            <Paper style={paperStyle}>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-evenly'
                    width='100%'
                    height='100%'                    
                >
                    <Typography variant="h5" component="h3">
                        HackCville
                    </Typography>
                    <Typography variant="body1" component="h3">
                        I need someone to make me a react app.
                        It's gotta be really good.  I'll pay 15$ per hour
                    </Typography>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='flex-end'
                        marginRight='5%'
                    >
                    <ArrowDownwardIcon onClick={handleClick}></ArrowDownwardIcon>
                    </Box>
                </Box>
            </Paper>
            <Comment hidden={hideComments}/>
            <Comment hidden={hideComments}/>
                
            
        </React.Fragment>
    );
}