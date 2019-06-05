import React from 'react';
import Navbar from './../components/Navbar.js'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import logo from './../../images/logo.png';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Navbar/>
      <Box className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        RevTek
      </Typography>
      <Typography variant="h2" gutterBottom>
        Matching companies with talented students
      </Typography>
      </Box>
    </div>
  );

}
export default Home;

