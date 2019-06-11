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

    }
  }

  // example of how to access the database
  componentDidMount(){


    firebase.auth().onAuthStateChanged(data => {
      if (!data){ this.setState({user: null});}
      else {this.setState({ user: data.id }, ()=> this.setState({loading: false}));
      

    }
    });
  


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
    if(this.state.loading){
      return <div></div>
    }
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
        <Route path="/profilepage" exact component={ProfilePage} />
        {/* <Route path="/StepperSignUp" exact component={StepperSignUp} /> */}

       {/* <Route path="/SignUp" exact component={SignUp} /> */}
        <Route path="/Marketplace" exact component={Marketplace}/>
        <PrivateRoute path="/privatestudent" exact component = {Companies} user={firebase.auth().currentUser} permissionType="student"/> 
      </Router>
       

      
   
      </div>
    );
  }
}


// create a private route to check if the user is of 'user' type
// const PrivateRoute = ({ component: Component, user, permissionType, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => {

//       let permission = ""
//       firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           console.log("i am signed in") // User is signed in.

//           console.log(user.uid)

      

//           const studentsRef = firebase.database().ref('students')
//           studentsRef.orderByChild('userId').equalTo(user.uid).on("value", function(snapshot) {
      
//            snapshot.forEach((function(child) { 
//              permission = (child.val().permission) ;
//             console.log(child.val().permission)
          
//            }))});

           
//            const companiesRef = firebase.database().ref('companies')
//            companiesRef.orderByChild('companyid').equalTo(user.uid).on("value", function(snapshot) {
       
//             snapshot.forEach((function(child) { 
//               permission = (child.val().permission) ;
//               console.log(child.val().permission)
           
//             }))});
          
//             console.log('permission'+permission)




           
//             return <Component/>;

            

//         } else {
//           // No user is signed in.
//           return <Redirect to="/signIn" />;
//         }
//       });

      
//     }
//   }
//   />
// );


const PrivateRoute = ({ component: Component, user, permissionType, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      
      if (user){
        return <Component user={user} {...props} />;
      } else {
        return <Redirect to="/signIn" />;
      }
      
    }
  }
  />
);



export default App;
