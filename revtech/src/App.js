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

import ProfilePage from './pages/ProfilePage'


import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "./firebase/firebase.js";
import Marketplace from './userpages/Marketplace';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      test: "",
      user: null,
      loading: true,
      permission: null
    }
  }

  // example of how to access the database
  componentDidMount(){
    

    firebase.auth().onAuthStateChanged(data => {
      if (!data){  this.setState({user: null});
      this.setState({permission: null});
      this.setState({loading: false})
    
    }
      else {this.setState({ user: data}, ()=> {
      
      let permission = null;

      const studentsRef = firebase.database().ref('students')
       studentsRef.orderByChild('userId').equalTo(this.state.user.uid).on("value", function(snapshot) {
  
       snapshot.forEach((function(child) { 
        permission = (child.val().permission);
        console.log(child.val().permission)

        // this.setState({permission: permission}, ()=> {this.setState({loading: false})})
      
       }))});

       
       const companiesRef = firebase.database().ref('companies')
      companiesRef.orderByChild('companyid').equalTo(this.state.user.uid).on("value", function(snapshot) {
   
        snapshot.forEach((function(child) { 
         permission = (child.val().permission);
          // this.setState({permission: permission}, ()=> {this.setState({loading: false})})
          console.log(child.val().permission)
       
        }))});

        var timeout = setInterval(()=>
{ if(permission!==null) { clearInterval(timeout); console.log(permission); 
    this.setState({permission: permission}, ()=> {console.log(this.state.permission);
      this.setState({loading: false})

    })
} }, 100);
        
        
        
      }
      
      );
      
      
    }
 
    
    });
  

  }

  

  render() {
 
    if(this.state.loading){
      return <div></div>
    }
    return (
      <div className="App">


             <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Companies" component={Companies}/>
        <PrivateRoute path="/CompanyProfile" exact component = {CompanyProfile} user={this.state.user} permission = {this.state.permission} permissionType="company"/>
        <PrivateRoute path="/Contract" exact component = {Contract} user={this.state.user} permission = {this.state.permission} permissionType="company"/>
        <PrivateRoute path="/Students" exact component = {Students} user={this.state.user} permission = {this.state.permission} permissionType="all"/>

        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUpCompany" exact component={SignUp} />
        <Route path="/SignUpStudent" exact component={SignUpNew} />
        <Route path="/SignUp" exact component={SignUpChoice} />
        <PrivateRoute path="/profilepage" exact component = {ProfilePage} user={this.state.user} permission = {this.state.permission} permissionType="student"/>

        <PrivateRoute path="/MarketPlace" exact component = {Marketplace} user={this.state.user} permission = {this.state.permission} permissionType="student"/>
        <PrivateRoute path="/privatestudent" exact component = {Companies} user={this.state.user} permission = {this.state.permission} permissionType="student"/> 
      </Router>


      
   
      </div>
    );
  }
}



const PrivateRoute = ({ component: Component, user, permission, permissionType, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      
      if (user && (permission === permissionType || permissionType ==="all")){
        return <Component user={user} {...props} />;
      } else {
        return <Redirect to="/SignIn" />;
      }
      
    }
  }
  />
);



export default App;
