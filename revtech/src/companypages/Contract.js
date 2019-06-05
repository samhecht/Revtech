import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from "../firebase/firebase";
import Snackbar from "@material-ui/core/Snackbar";
import { Link, withRouter } from "react-router-dom";

import Navbar from '../components/Navbar.js';


const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
   }));
   
   
   
function Contracts(props) {
   const { history } = props;
    const classes = useStyles();
    // Contract
    // const [clientName, setClientName] = useState("");
    // const [clientCompany, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState("");
   
    const handleClick = (e) => {
       e.preventDefault();
       var userId = firebase.auth().currentUser.uid;
       const contracts = firebase.database().ref("contracts/" + userId);
       const contract = {
        //    user: userId,
          //  name: clientName,
          //  company: clientCompany,
           email: email,
           project: projectName,
           description: description
       }
       if (
        //  clientName != "" && 
      //  clientCompany != "" && 
       email != "" && 
       projectName != "" 
       && description != "") {
        contracts.push(contract);
        // setClientName("");
        // setCompany("");
        setEmail("");
        setProjectName("");
        setDescription("");
       } 
    //    To-do display error message
       
    };
   
    return (
      <div>
       <Navbar/>
      <Container component="main" maxWidth="sm">
        
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contract Form
          </Typography>
          <form className={classes.form} noValidate>
          {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Client Name"
              type="name"
              autoComplete="name"
              value={clientName}
              onChange={e => setClientName(e.target.value)}
            /> */}
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="companyName"
              label="Company"
              type="companyName"
              autoComplete="companyName"
              value={clientCompany}
              onChange={e => setCompany(e.target.value)}
            /> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="projectName"
              label="Project Name"
              type="projectName"
              autoComplete="projectName"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="description"
              autoComplete="description"
              multiline
              rows="6"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Upload
            </Button>
          </form>
        </div>
   
      </Container>
      </div>
    );
   }
    
    export default withRouter(Contracts)
    