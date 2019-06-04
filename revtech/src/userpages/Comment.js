import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

export default function Comment(props) {

    if (props.hidden){
        return <div></div>
    }

    const paperStyle = {
        width: '50%',
        height: '30%',
        marginLeft: '30%',
        marginTop: '2%'
    }
    return (
        <React.Fragment>
            <Paper style={paperStyle}>
                <Typography>
                    Student Name <br/>
                    Comment blah blah blah
                </Typography>
            </Paper>
        </React.Fragment>
    );
}