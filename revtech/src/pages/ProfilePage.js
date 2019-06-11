import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from './../components/Navbar.js';
import { flexbox } from '@material-ui/system';
import { grey } from '@material-ui/core/colors';
import Posting from './../userpages/Posting.js';
import firebase from '../firebase/firebase.js';
import EditTextfield from './editTextField'

const text = "Immediately regret falling into bathtub woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now yet meow for stare out the window. Lick yarn hanging out of own butt. Stuff and things knock over christmas tree meow meow, i tell my human yet find empty spot in cupboard and sleep all day but i'm going to lap some water out of my master's cup meow";
class ProfilePage extends React.Component {
  state = {
   bio:"",
   last:"",
   userKey:"",
   userId: ""

  }
  
  componentDidMount(){
    firebase.auth().onAuthStateChanged( user => {
      if (user){
        var userId = firebase.auth().currentUser.uid;
        const userRef = firebase.database().ref('students/'+userId);
         console.log(userId)
         userRef.on('value', (snapshot) => {
          let data = snapshot.val();
          //all the information is in an object that lives under an auto generated key within the user
          //object, the line below fetches the list of keys that exist within the user object, in this case,
          //its just one  
          
          var keys = Object.keys(data);
           //console.log(keys[0])
          for(let item in data){
             this.setState({
              bio: data[item].bio,
              last: data[item].last,
              userKey: keys[0],
              userId: userId

             })
                  
             
          }
          console.log(this.state);
          
      });
         
      }
    });
  }

  render() {
    return (
      <div className="appContainer " style = {{minHeight:1000 }}>
        <Navbar />
        <div className="profile1">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
            <img src="https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?cs=srgb&dl=adorable-animal-animal-photography-259803.jpg&fm=jpg" style={{ width: 300, height: 300, margin: 50 }} />
            <div style={{ marginLeft: 50, marginBottom: 20, color: 'grey', fontSize:15 }}> Contact Info _________________________________</div>
            <div style={{ marginLeft: 50, fontSize: 20, display: 'flex', }}>
              LinkedIn
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" style={{ width: 20, height: 20, marginLeft:5 }} />
            </div>
            <a href="https://www.linkedin.com/in/cwransleriv/" style = {{marginLeft:50, marginTop:10}}>https://www.linkedin.com/in/cwransleriv/</a>
            <div style={{ marginLeft: 50, marginTop: 30, fontSize: 20, display: 'flex', }}>
              GitHub
              <img src="https://image.flaticon.com/icons/svg/25/25231.svg" style={{ width: 20, height: 20, marginLeft:5 }} />
            </div>
            <a href="https://github.com/mfrifkin" style = {{marginLeft:50, marginTop:10}}>https://github.com/mfrifkin</a>
          </div>
          
          <div className="profile2" style={{ marginTop: 40, fontSize: 40, display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
            Kitty Cat Kevin
           <div style={{ fontSize: 10, display: 'flex', justifyContent: 'start' }}>HackCville Member</div>
           <div style={{ fontSize: 30, display: 'flex', justifyContent: 'start', marginTop: 20}} >Bio</div>
           {this.state.bio.length>0? <EditTextfield text = {this.state.bio} userId = {this.state.userId} userKey = {this.state.userKey}/>: <div></div>}
           {/* <p style = {{ fontSize: 15, marginTop: 20, textAlign: 'left', maxWidth: 550 }}>{this.state.bio}</p> */}
           <div style={{ fontSize: 30, display: 'flex', justifyContent: 'start', marginTop: 20 }} >Active Contracts</div>
           <Posting leftMargin = {'0%'} width = {'90%'} height = {'200px'} arrow={false}/>
           {/* {this.state.bio.length>0? <EditTextfield text = {this.state.bio} userId = {this.state.userId} userKey = {this.state.userKey}/>: <div></div>} */}
          </div>
         
        </div>
      </div>


    );
  }
}
export default ProfilePage;
