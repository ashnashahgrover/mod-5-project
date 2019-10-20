import React, { Component } from "react";
// import logo from './logo.svg';
import logo from './typewriter1.svg';
import './App.css';
import SearchContainer from "./SearchContainer.js"
import Quill from './Quill.js'

class AppContainer extends Component {

  state = {
    add:""
  }

  addToQuill = (phrase) => {
    this.setState({add: phrase})
  }

  clearAdd = () => {
    this.setState({add:""})
  }

  render (){
      return (
      <div className="App">
        <header className="App-header">
          <div>{this.props.currentUser ? `${this.props.currentUser.name} logged in` : null}</div>
          <img src={logo} className="App-logo" alt="logo" />
            <SearchContainer addToQuill={this.addToQuill}/>
            <Quill currentUserID={this.props.currentUserID} clearAdd={this.clearAdd} add={this.state.add}/>
        </header>
      </div>
      );
  }
}

export default AppContainer;
