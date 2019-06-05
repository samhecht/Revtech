import React, { Component } from 'react';
import Navbar from './../components/Navbar.js'

import Grid from '@material-ui/core/Grid';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import avatar from './avatar.png'
import chip from './chip.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';

function Students(){
    const titleStyle = {
        marginTop: "5%",
        marginBottom: '5%',
    }
    const style1 ={
        marginLeft: '10%',
        marginRight: '10%',
        justifyContent: 'center'
    }
    const arr = [1,2,3,4,5]
        return (
            <div>
            <Navbar/>
            <Typography 
                variant="h2"
                style={titleStyle}
            >
                Students
            </Typography>
            {/* <Grid container spacing={4}>
            <Grid item xs>
            <MediaCard/>
            </Grid>
            <Grid item xs>
            <MediaCard/>
            </Grid>
            <Grid item xs>
            <MediaCard/>
            </Grid>
            <Grid item xs>
            <MediaCard/>
            </Grid>
            <Grid item xs>
            <MediaCard/>
            </Grid>
        

            </Grid> */}
            <Grid container spacing={4}>
                      {arr.map(person => (
            <Grid item xs>
            
            <MediaCard/>
            
            
            </Grid>
          ))}
          </Grid>
            </div>
        );
    

}
export default Students;



function getStudentData(){

    
}


function MediaCard() {
    const useStyles = makeStyles({
        card: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  function handleExpandClick() {
    setExpanded(!expanded);
  }


  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
           className={classes.media}
           image={chip}
           //title="Student Profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chip Ransler
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is my bio!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="https://github.com/samhecht"size="small" color="primary" >
          Github
        </Button>
        <Button href= "https://www.linkedin.com/in/cwransleriv/" size="small" color="primary">
          Linkedin
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>


      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography>Chip Ransler is the program lead for Pipeline and the Executive Director of HackCville. He also lectures at the Darden School of Business and has guest lectured at the McIntire School of Commerce and the Batten School of Leadership and Public Policy. Chip has extensive experience in entrepreneurship. He formerly founded and/or led several companies, including Husk Power Systems, Branch Basics, and Topik Solutions. Chip has an MBA from Darden and a BA in Archaeology from the University of Virginia. You can reach Chip with any questions at chip@hackcville.com.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}