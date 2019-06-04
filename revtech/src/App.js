import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "./firebase/firebase";

import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import StepperSignUp from './StepperSignUp'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      test: "",
    }
  }

  // example of how to access the database
  componentDidMount(){
    const sessionRef = firebase.database().ref('/Test');
    
    sessionRef.on("value", snap => {
      console.log(snap.val());
      this.setState({
        test: snap.val(),
      });
    })
  }

  

  render() {
    // if (this.state.test){
    //   return (
    //     <p>{this.state.test}</p>
    //   )
    // }
    return (
      <div className="App">
        {/* <p>Didn't get data</p> */}
        
     

      <Router>
      <Route path="/SignIn" exact component={SignIn} />
       <Route path="/SignUp" exact component={SignUp} />
       <Route path="/StepperSignUp" exact component={StepperSignUp} />
        {/* <PrivateRoute path="/" exact component={TimerPage} user={user} permissionType="user"/> */}
      </Router>
   
      </div>
    );
  }
  
}


// create a private route to check if the user is of 'user' type
const PrivateRoute = ({ component: Component, user, permissionType, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (user && user.permission === permissionType){
        return <Component user={user} {...props} />;
      } else {
        return <Redirect to="/signIn" />;
      }
      
    }
  }
  />
);




export default App;
