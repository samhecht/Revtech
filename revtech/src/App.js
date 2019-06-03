import React from 'react';
import './App.css';
import Home from './pages/Home.js'
import Companies from './pages/Companies.js'
import Students from './pages/Students.js'

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends React.Component{


  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Companies" component={Companies}/>
        <Route exact path="/Students" component={Students}/>
      </Router>

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
