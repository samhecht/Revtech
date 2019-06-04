import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import firebase from '../firebase/firebase'
import { signOut } from "../firebase/firebase";
import { Box } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';



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

// const handleSignOut = () => setUser(null);

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
      padding: "2% 1%",
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
        >
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
          {user == null ? null : <Button color="inherit"><Link style={linkStyle} to="/Contracts">Contracts</Link></Button>}
          {user !==null ? null : <Button color="inherit"><Link style={linkStyle} to="/SignIn">Login</Link></Button>}
          {user == null ? null : <Button color="inherit" onClick={handleLogOut}><Link style={linkStyle} to="/">Logout</Link></Button>}
        </Box>
      </Box>
    </div>
    );

}
export default Navbar;