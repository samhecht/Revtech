import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import firebase from "../firebase/firebase";
import Navbar from '../components/Navbar.js';


export default class CompanyProfile extends React.Component {
    state = {
        contracts : [],
        authUser: null,
    }

    componentDidMount() {
        // project name, project description 

        // const userId = firebase.auth().currentUser.uid;

        const contractsRef = firebase.database().ref('contracts');

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let id = user.uid;
                this.setState({ authUser : id});
                // console.log(user.uid);
                // console.log(this.state.authUser);
                // console.log("i have a user");
                // console.log(id);
                contractsRef.on('value', (snapshot) => {
                    let contracts = [];
                    let allContracts = snapshot.val();
                    for (let user in allContracts) {
                        if (user === this.state.authUser) {
                            console.log(user);
                            for (let contract in allContracts[user]) {
                                let c = {
                                    userid: user,
                                    contractid : contract,
                                    project: allContracts[user][contract].project,
                                    description: allContracts[user][contract].description,
                                }
                                // console.log(c);
                                contracts.push(c);
                            }
                        }
                    }
                    this.setState({
                        contracts : contracts
                    })
                })
            } else {
               console.log("i have no user");
            }
        });

            // All Contracts for every user
        // contractsRef.on('value', (snapshot) => {
        //     // console.log(snapshot.val())
        //      let items = snapshot.val();
        //      const entries = Object.entries(items)
        //      console.log(entries)
        //      for (const [id, contracts] of entries) {
        //      
        //             const contractArray = Object.values(contracts)
        //             this.setState({contracts : contractArray})
        //          
        //        }
        // });
        // console.log(this.state.contracts)
        // console.log(this.state.authUser);
    }

    handleDelete = (userid, contractid) => {
        return firebase.database().ref('contracts/' + userid).child(contractid).remove();
    }

    render() {
        console.log(this.state.user)
        
        return (
        
        <div>
        <Navbar/>
        <Container component="main" maxWidth="md">
            <h1> Contracts</h1>
            {this.state.contracts.map( (contract, id) => (
                <ExpansionPanel key={id}>
                    <ExpansionPanelSummary 
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography className={contract.project}>{contract.project}</Typography>
                        <Button onClick={() => this.handleDelete(contract.userid, contract.contractid)}>X</Button>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Description: {contract.description}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        
        </Container>
        </div>
        );
    }
   }
    
    // export default withRouter(CompanyProfile)
    