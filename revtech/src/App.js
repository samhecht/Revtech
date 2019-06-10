import React from 'react';
import './App.css';
import Home from './pages/Home.js'
import Companies from './pages/Companies.js'
import CompanyProfile from './companypages/CompanyProfile.js'
import Contract from './companypages/Contract.js'
import Students from './pages/Students.js'
import SignIn from './pages/SignIn'
import SignUpNew from './pages/signUpTesting.js'
import SignUp from './pages/SignUp.js'
import StepperSignUp from './pages/StepperSignUp'
import SignUpChoice from './pages/SignUpChoice.js'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "./firebase/firebase.js";
import Marketplace from './userpages/Marketplace';

class App extends React.Component{

  constructor(props){
    super(props);
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

      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Companies" component={Companies}/>
        <Route exact path="/CompanyProfile" component={CompanyProfile}/>
        <Route exact path="/Contract" component={Contract}/>
        <Route exact path="/Students" component={Students}/>
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUpCompany" exact component={SignUp} />
        <Route path="/SignUpStudent" exact component={SignUpNew} />
        <Route path="/SignUp" exact component={SignUpChoice} />
        {/* <Route path="/StepperSignUp" exact component={StepperSignUp} /> */}

       {/* <Route path="/SignUp" exact component={SignUp} /> */}
        <Route path="/Marketplace" exact component={Marketplace}/>

      </Router>
       

        {/* <PrivateRoute path="/" exact component={TimerPage} user={user} permissionType="user"/> */}
   
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
