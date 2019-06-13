import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


import firebase from "../firebase/firebase";

const companyName = {
    fontWeight: 'bold'
}

const expansionDetails = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
}
export default class Approval extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    handleDelete = (contractid) => {

    }

    componentDidMount() {
       const contractId = this.props.contractId;

       const commentRef = firebase.database().ref('/comments');
       commentRef.on("value", snap => {
           const commentObj = snap.val();
           const commentKeys = Object.keys(commentObj);

           const comments = commentKeys.filter(key => commentObj[key].parentContract === contractId);
           this.setState({
               comments: comments,
           });
       });

    }

    
    render() {
        console.log(this.props.contractId)
        return (
            <div>
            <Navbar/>
            <h1 style={{
                marginTop: '3%'
            }}
            >
                Interest
            </h1>
            
            <Table style={{
                width: '70%',
                marginLeft: '15%'
            }}>
            <TableBody>
            <TableRow>
                    <TableCell  component="th"> Name </TableCell>
                    <TableCell  component="th"> Description </TableCell>
                    <TableCell  component="th" align="center"> Delete </TableCell> 
            </TableRow>
                {this.state.comments.map(comment => {
                        return (
                            <TableRow key={Math.random()}>
                                <TableCell>{comment.userEmail}</TableCell>
                                <TableCell>{comment.commentBody}</TableCell>
                                <TableCell><Button onClick={() => this.handleDelete()}><i className="material-icons">delete_forever</i></Button></TableCell>
                            </TableRow>
                        );
                })}
               
            </TableBody>
            </Table>
            </div>
        );
    }
}