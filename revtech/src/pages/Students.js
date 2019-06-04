import React, { Component } from 'react';
import Navbar from './../components/Navbar.js'



import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import avatar from './avatar.png'

function Students(){
   
        return (
            <div>
            <Navbar/>
            Students
            <MediaCard/>
            </div>
        );
    

}
export default Students;




const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={avatar}
          title="Student Profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            John Doe
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is my bio!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Github
        </Button>
        <Button size="small" color="primary">
          Linkedin
        </Button>
      </CardActions>
    </Card>
  );
}