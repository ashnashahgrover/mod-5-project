import React, { Component } from "react";
// import logo from './logo.svg';
import logo from './typewriter1.svg';
import './App.css';
import SearchContainer from "./SearchContainer.js"
import Quill from './Quill.js'

class App extends Component {

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
          <img src={logo} className="App-logo" alt="logo" />
            <SearchContainer addToQuill={this.addToQuill}/>
            <p>and a container that returns inspos inside bubbles in here</p>
            <Quill clearAdd={this.clearAdd} add={this.state.add}/>
        </header>
      </div>
      );
  }
}

export default App;
