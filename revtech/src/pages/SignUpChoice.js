import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { withRouter } from "react-router-dom";

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
   marginTop: theme.spacing(1),
 },
 submit: {
   margin: theme.spacing(3, 0, 2),
 },
}));



function SignUp(props) {
const { history } = props;
 const classes = useStyles();

 const handleCompany = () =>{
     history.push('/SignUpCompany')
 }
 const handleStudent = () =>{
    history.push('/SignUpStudent')
}
 

 return (
   <div>
    <Navbar/>
   <Container component="main" maxWidth="xs">
     
     <CssBaseline />
     <div className={classes.paper}>

       <Typography component="h1" variant="h5">
         Are you a company looking to recruit talented interns for new projects?
       </Typography>

         <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
           onClick={handleCompany}
         >
           Sign up as a company!
         </Button>

         <Typography component="h1" variant="h5">
         Are you a student looking to work on real world projects?
       </Typography>

         <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
           onClick={handleStudent}
         >
           Sign up as a student!
         </Button>
          

     </div>

   </Container>
   </div>
 );
}

export default withRouter(SignUp)
