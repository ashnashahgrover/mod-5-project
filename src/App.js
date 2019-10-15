import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import AppContainer from './AppContainer'
import Login from './Login'
import Register from './Register'

class App extends Component {

  state = {
   loggedIn: false,
   currentUserID: null,
   currentUser: {},
  }

  render (){
      return (

        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={AppContainer} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </Router>

      );
  }
}

export default App;
