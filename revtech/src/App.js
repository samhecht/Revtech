import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "./firebase/firebase";


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
    if (this.state.test){
      return (
        <p>{this.state.test}</p>
      )
    }
    return (
      <div className="App">
        <p>Didn't get data</p>
        
      {/*}
      <Router>
        <PrivateRoute path="/" exact component={TimerPage} user={user} permissionType="user"/>
      </Router>
    */}
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
