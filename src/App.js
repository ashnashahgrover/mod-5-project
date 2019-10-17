import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import Navbar from './Navbar'
import AppContainer from './AppContainer'
import Login from './Login'
import Register from './Register'
import PoemsContainer from './PoemsContainer'

class App extends Component {

  state = {
   loggedIn: true,
   currentUserID: 1,
   currentUser: {id: 1, name: "ashna"}
  }

  loginUser = (info) => {
    const config ={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: info.name,
        password: info.password
      })
    }
    let status = null
    fetch("http://localhost:3000/login", config)
    .then(resp => {
      console.log(resp.status)
      status = resp.status
      return resp.json()})
    .then(data=>{
      console.log(data)
      if (status===202){this.setState({
        loggedIn: true,
        currentUserID: data.id,
        currentUser: data
      })}
      else{alert("Incorrect Username Or Password!")}
    })
  }

  registerUser = (info) => {
    const config ={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: info.name,
        password: info.password
      })
    }
    let status = null
    fetch("http://localhost:3000/users", config)
    .then(resp => {
      console.log(resp.status)
      status = resp.status
      return resp.json()})
    .then(data=>{
      if (status===201){this.setState({
        loggedIn: true,
        currentUserID: data.id,
        currentUser: data
      })}
      else{alert(data.messages[0])}
    })
  }

  render (){
      return (

        <Router>
          <div>
            <Navbar />
            <Route exact path="/" render={ () => this.state.loggedIn ? <AppContainer currentUserID={this.state.currentUserID} currentUser={this.state.currentUser}/> : <Redirect to='/login' /> } />
            <Route exact path="/login" render={ () => this.state.loggedIn ? <Redirect to='/' /> : <Login loginUser={this.loginUser} /> } />
            <Route exact path="/register" render={ () => this.state.loggedIn ? <Redirect to='/' /> : <Register registerUser={this.registerUser} /> } />
            <Route exact path="/poems" render={ () => !this.state.loggedIn ? <Redirect to='/login' /> : <PoemsContainer currentUserID={this.state.currentUserID}/> } />
          </div>
        </Router>

      );
  }
}

export default App;
