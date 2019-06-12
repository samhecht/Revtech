import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import firebase from "../firebase/firebase";

export default class Approval extends React.Component {
    state = {
        contracts : []
    }
    componentDidMount() {
        const contractsRef = firebase.database().ref('contracts');
        //Displays All Contracts for every user
        contractsRef.on('value', (snapshot) => {
            // console.log(snapshot.val())
             let items = snapshot.val();
             const entries = Object.entries(items)
             console.log(entries)
             for (const [id, contracts] of entries) {
             
                    const contractArray = Object.values(contracts)
                    this.setState({contracts : contractArray})
               }
        });
        console.log(this.state.contracts)
        console.log(this.state.authUser);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

