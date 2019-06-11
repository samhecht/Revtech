import React from 'react';
import Navbar from './../components/Navbar.js'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import hero from '../images/hero.jpg';
import app from '../images/app.jpeg';
import office from '../images/office.jpeg';
import students from '../images/students.jpeg';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function Home() {
  const classes = useStyles();

  const imageBoxStyle = {
    height:'825px',
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
    filter: 'brightness(65%)',
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

  const heroTitle = {
    fontSize: '55px'
  }
  const heroTagline = {
    fontSize: '24px'
  }

  const section = {
    display: 'flex',
    width: '100%',
    height: '600px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150px',
    marginBottom: '150px',
  }

  const info = {
    display: 'flex',
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left'
  }

  const infoImg1 = {
    display: 'flex',
    width: '40%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
  
  const infoImg2 = {
    display: 'flex',
    width: '40%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
  const h3 = {
    textAlign: 'left',
    lineHeight: '1.2',
    textDecoration: 'underline',
    textDecorationColor: '#73C2FB'
    // color: '#73C2FB'
  }
  const h4 = {
    textAlign: 'left',
    fontSize: '26px',
    marginTop: '25px',
    lineHeight: '2'
  }
  const imgStyle = {
    width: '75%',
    boxShadow: '-15px 15px 30px #73C2FB',
    borderRadius:'50%'
  }
  return (
    <div>
      <Navbar/>
      <Box style={imageBoxStyle}>
        <Box style={overlayBoxStyle}>
          <Box style={overlayBoxText}>
              <h1 style={heroTitle}>A tech hub for companies and students.</h1>
              <h2 style={heroTagline}>Discover top talent. Connect with industry professionals. Work on meaningful projects.</h2>
          </Box>
        </Box>

        <img alt="hero_image" src={hero} style={imageStyle}></img>
      </Box>

      <Box className="section" style={section}>
        <Box className="info" style={info}>
          <Typography variant="h3" style={h3}>Find the perfect internship</Typography>
          <Typography variant="h4" style={h4}>Choose projects that fuel your passion. Find the startups and companies you want to work for. Discover your interests and future career. There are numerous opportunities waiting for you to unlock.</Typography>
        </Box>
        <Box className="infoImage" style={infoImg1}>
          <img src={students} style={imgStyle}></img>
        </Box>
      </Box>

      <Box className="section" style={section}>
        <Box className="infoImage" style={infoImg2}>
          <img src={office} style={imgStyle}></img>
        </Box>
        <Box className="info" style={info}>
          <Typography variant="h3" style={h3}>Hire top-tier students</Typography>
          <Typography variant="h4" style={h4}>We train each of our students, so that they can maximize their time at your company. We take the burden of communication, presentation, and skills training, so they can hit the ground running wherever they go.</Typography>
        </Box>

      </Box>

      <Box className="section" style={section}>
        <Box className="info" style={info}>
          <Typography variant="h3" style={h3}>Product beautiful and functional deliverables</Typography>
          <Typography variant="h4" style={h4}>We believe companies can maximize their value by hiring student talent. Industry leaders and students work together to actualize their visions. We have a community ready to design interfaces, build apps, market products, and more.</Typography>
        </Box>
        <Box className="infoImage" style={infoImg1}>
          <img src={app} style={imgStyle}></img>
        </Box>
      </Box>

    </div>
  );

}
export default Home;

