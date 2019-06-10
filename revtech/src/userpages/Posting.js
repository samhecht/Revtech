import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Comment from './Comment';
import CommentForm from './CommentForm';


export default function Posting(props) {

    const [hideComments, setHideComments] = useState(true);

    const handleClick = () => {
        if (hideComments) {
            setHideComments(false);
        } else {
            setHideComments(true);
        }
    }

    console.log(props.height)
    const paperStyle = {
        width: props.width,
        height: props.height,
        marginLeft: props.leftMargin,
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
                    {props.arrow? (<ArrowDownwardIcon onClick={handleClick}></ArrowDownwardIcon>):<div></div>}
                    </Box>
                </Box>
            </Paper>
            <CommentForm hidden={hideComments}/>
            <Comment hidden={hideComments}/>
            <Comment hidden={hideComments}/>
                
            
        </React.Fragment>
    );
}