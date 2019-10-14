import React, { Component } from "react";
// import logo from './logo.svg';
import logo from './typewriter1.svg';
import './App.css';
import SearchContainer from "./SearchContainer.js"

class App extends Component {
  render (){
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <SearchContainer/>
          </p>
          <p>
            and a container that returns inspos inside bubbles in here 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More React
          </a>
        </header>
      </div>
      );
  }
}

export default App;
