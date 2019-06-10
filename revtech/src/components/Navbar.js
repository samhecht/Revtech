import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import firebase from '../firebase/firebase'
import { signOut } from "../firebase/firebase";
import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import logo from '../images/logo-white.png';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));



function Navbar(props){
    const classes = useStyles();
    const [user, setUser] = useState(null); // sees if someone is logged in

    function handleLogOut() {
      setUser(null);
      signOut().catch(e => console.error("Sign out error:", e));
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(true);
      } else {
        setUser(null);
      }
    });

    const navBarStyle = {
      backgroundColor: '#73C2FB',
      padding: "1.5% 1%",
    }

    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
    }

    return (
    <div className={classes.root}>
      <Box
        display='flex'
        flex-direction='row'
        justifyContent='space-between'
        style={navBarStyle}
      >
        <Box
          marginLeft="5%"
          display='flex'
          flex-direction='row'
        >
          <Avatar alt="logo" src={logo}></Avatar>
          <Link style={linkStyle} to="/">
            <Typography variant="h4" to="/" >
              RevTek
            </Typography>
          </Link>
        </Box>
        
        <Box
          display='flex'
          flex-direction='row'
          justifyContent='space-evenly'
          color="inherit"
          width="45%"
        >
          <Button color="inherit"><Link style={linkStyle} to="/Marketplace">Marketplace</Link></Button>
          <Button color="inherit"><Link style={linkStyle} to="/Companies">Companies</Link></Button>
          <Button color="inherit"><Link style={linkStyle} to="/Students">Students</Link></Button>
          {/* Contracts only appear to Company Type User*/}
          {/* Will update this later to just 'Profile' when we get separate navbars */}
          {user == null ? null : <Button color="inherit"><Link style={linkStyle} to="/CompanyProfile">Company Profile</Link></Button>}
          {user == null ? null : <Button color="inherit"><Link style={linkStyle} to="/Contract">Contract</Link></Button>}
          {user !==null ? null : <Button color="inherit"><Link style={linkStyle} to="/SignIn">Login</Link></Button>}
          {user == null ? null : <Button color="inherit" onClick={handleLogOut}><Link style={linkStyle} to="/">Logout</Link></Button>}
        </Box>
      </Box>
    </div>
    );

}
export default Navbar;