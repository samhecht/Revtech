import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from "./../firebase/firebase";
import { Link, withRouter } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import "firebase/auth";


import Navbar from './../components/Navbar.js';


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function SignUp(props) {


const classes = useStyles();
const { history } = props;
const [email, setEmail] = useState( "");
const [password, setPassword] = useState( "");


 const handleEmail = (e) => {
    setEmail( e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const [message, setMessage] = useState("");

  const handleSignUp = async(e) => {

    e.preventDefault();
    console.log(email);
    console.log(password);
    if(email ==='' || password ===''){
      setMessage('Please enter all required fields');
    }
    
   
    else{
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.then((result)=>{
      history.push('/')
        console.log('done')
      },
      (error)=>{
        console.log(error.message)
        setMessage(error.message);

      })
    }

  }


  return (
    <div>
    <Navbar/>
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} name="signupform">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="linkedin"
                label="LinkedIn"
                name="linkedin"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="github"
                label="Github link"
                name="github"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Bio"
                label="Enter a short bio"
                name="bio"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePassword}
              />

            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid item>
            <Grid item>
            <Link className={classes.link} to="/SignIn">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={!!message}
        autoHideDuration={5000}
        onClose={() => setMessage(null)}
        message={<span>{message}</span>}
      />
      
    </Container>
    </div>
  );
}

export default withRouter(SignUp)
