import React from 'react';
import Navbar from './../components/Navbar.js'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import hero from '../images/hero.jpg';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function Home() {
  const classes = useStyles();

  const imageBoxStyle = {
    height:'600px',
    overflow: 'hidden',
    position: 'relative',
  }

  const overlayBoxStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    // top: '13%',
    // left: '30%',
    // backgroundImage: 'linear-gradient(to top, rgba(102, 126, 234, 0.6) 0%, rgba(118, 75, 162, 0.6) 100%)',
    // background: 'rgba(61, 92, 119, 0.6)'
  }

  const imageStyle = {
    height:'auto',
    width: '100%',
    filter: 'brightness(80%)',
    // filter: 'blur(1px)',
    position: 'absolute',
    top: '0',
    left: '0'
  }

  const overlayBoxText = {
    position: 'relative',
    paddingLeft: '10%',
    paddingRight: '10%',
    color: 'white',
    zIndex: '5',
    textAlign: 'left',
    // top: '25%',
    // left: '15%',
  }


  return (
    <div>
      <Navbar/>
      <Box style={imageBoxStyle}>
        <Box style={overlayBoxStyle}>
          <Box style={overlayBoxText}>
              <h1>Match with companies to create meaningful projects</h1>
              <h2></h2>
          </Box>
        </Box>

        <img alt="hero_image" src={hero} style={imageStyle}></img>
      </Box>

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

