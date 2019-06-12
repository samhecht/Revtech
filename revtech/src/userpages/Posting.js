import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Comment from './Comment';
import CommentForm from './CommentForm';
import firebase from '../firebase/firebase';


export default function Posting(props) {

    const [comments, setComments] = useState([]);

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

    useEffect(() => {
        const parentKey = props.parentId;

        const commentRef = firebase.database().ref('/comments');
        let tempComments = [];
        commentRef.on("value", snapshot => {
            const currComments = snapshot.val();
            const currKeys = Object.keys(currComments);

            currKeys.forEach(key => {
                const commentContractId = currComments[key].parentContract;
                if (commentContractId === parentKey) {
                    tempComments.push(<Comment hidden={hideComments} comment={currComments[key]} />);
                }
            });
        });
        setComments(tempComments);
    })



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
                        {props.contract.email}
                    </Typography>
                    <Typography variant="body1" component="h3">
                        {props.contract.description}
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
            <CommentForm hidden={hideComments} parentContract={props.contract.companyid} parentId={props.parentId}/>
            {comments}
                
            
        </React.Fragment>
    );
}