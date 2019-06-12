import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import firebase from "../firebase/firebase";
import { flexbox } from '@material-ui/system';




export default class Approval extends React.Component {

    state = {
        contracts : [],
        approved : "",
    }

    handleDelete = (contractid) => {
        return firebase.database().ref('contracts/').child(contractid).remove();
    }

    handleApprove = (contractid) => {
        let contractsRef = firebase.database().ref('contracts/').child(contractid);
        contractsRef.on('value', (snapshot) => {
            let approvedStatus = snapshot.val().approved
            // Have to set the information to a state otherwise contractsRef will run infinite loops calling itself
            this.setState ({ 
                approved : approvedStatus
            })
            console.log("from: " + this.state.approved);
            if (this.state.approved === "pending") {
                contractsRef.update({
                    approved: "approved"
                })
                this.setState({
                    approved: "approved"
                })
                // console.log(this.state.approved);
            } else { // (this.state.approved === "approved")
                contractsRef.update({
                    approved: "pending"
                })
                this.setState({
                    approved: "pending"
                })
                console.log(this.state.approved);
            }
            console.log("changed to: " + this.state.approved)
            // console.log(snapshot.val().approved);
        })

        
    }

    updateField = (field, value) => {
        this.setState({
         [field]: value
        })
    }

    componentDidMount() {
       

        const contractsRef = firebase.database().ref('contracts');
        //Displays All Contracts for every user
        contractsRef.on('value', (snapshot) => {
            // console.log(snapshot.val())
             let contracts = []
             let allContracts = snapshot.val();
             for (let contract in allContracts) {
                let trimmed = "";
                if (allContracts[contract].description.length >= 75) {
                    trimmed = allContracts[contract].description.substring(0, 75) + "..."
                } else {
                    trimmed = allContracts[contract].description
                }
                let pushContract = {
                    contractid: contract,
                    companyid: allContracts[contract].companyid,
                    date: allContracts[contract].date,
                    time: allContracts[contract].time,
                    email: allContracts[contract].email,
                    project: allContracts[contract].project,
                    description: allContracts[contract].description,
                    trimmedDescription: trimmed,
                    status: allContracts[contract].approved, // not approved yet
                }
                contracts.push(pushContract);
                
            }
            this.setState({
                contracts : contracts,
            })
        });
        console.log(this.state.contracts)
        console.log(this.state.authUser);
    }

    render() {
        console.log(this.state.contracts);
        return (
            <div>
            <Table>
            <TableBody>
            <TableRow>
                {/* <ExpansionPanel>
                    <ExpansionPanelSummary> */}
                    {/* <TableCell component="th"> Time</TableCell> */} 
                    <TableCell  component="th"> Date </TableCell>
                    <TableCell  component="th"> Name </TableCell>
                    <TableCell  component="th"> Description </TableCell>
                    <TableCell  component="th"> Status </TableCell>
                    <TableCell  component="th" align="center"> Approve </TableCell>
                    <TableCell  component="th" align="center"> Delete </TableCell> 
                {/* </ExpansionPanelSummary>
                </ExpansionPanel> */}
            </TableRow>
            {this.state.contracts.map((contract, id) => (
                <TableRow key={id}>
                    {/* <TableCell>{contract.time}</TableCell> */}
                    <TableCell>{contract.date}</TableCell>
                    <TableCell>{contract.project}</TableCell>
                    <TableCell>{contract.trimmedDescription}</TableCell>
                    <TableCell>{contract.status}</TableCell>
                    <TableCell><Button onClick={() => this.handleApprove(contract.contractid)}> Approve </Button></TableCell>
                    <TableCell><Button onClick={() => this.handleDelete(contract.contractid)}><i className="material-icons">delete_forever</i></Button></TableCell>
                </TableRow>
            ))}
            </TableBody>
            </Table>
            </div>
        );
    }
}