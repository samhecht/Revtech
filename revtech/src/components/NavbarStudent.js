import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

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

function NavbarStudent(){
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit"><Link to="/">RevTek</Link></Button>
          <Button color="inherit"><Link to="/Companies">Companies</Link></Button>
          <Button color="inherit"><Link to="/Students">Students</Link></Button>
          <Button color="inherit"><Link to="/">Sign Out</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
    );

}
export default NavbarStudent;