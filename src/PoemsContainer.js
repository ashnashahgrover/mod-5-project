import React, { Component } from "react";
import leftArrow from './left-arrow.svg'
let demoButtons

export default class PoemsContainer extends Component {

  state = {
    poems: [],
    counter: 0
  }

  componentDidMount(){
    fetch(`http://localhost:3000/user_poems/${this.props.currentUserID}`)
    .then(resp=> resp.json())
    .then(data=>this.setState({poems: data}))
  }

  renderPoemTitles = () => {
    return this.state.poems.map(e=><li>{e.content}</li>)
  }

      start () {

      // Add event "click" to "demo buttons"
      demoButtons = document.querySelectorAll ('.js-modify');
      for (var i = 0; i < demoButtons.length; i++) {
        demoButtons[i].addEventListener ('click', this.toggleEffect);
      }

      // Add event "click" to "save buttons"
      var saveButtons = document.querySelectorAll ('.js-save');
      for (var i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener ('click', this.toggleActive);
      }

      }

    // Toggle "effect" classes
    toggleEffect () {
      var target = document.querySelector (this.dataset.target);
          target.dataset.effect = this.dataset.effect;

      for (var i= 0; i < demoButtons.length; i++) {
        demoButtons[i].classList.remove ('active');
      }
      debugger
      this.toggleActive.call(this);
    }

    // Toggle "active" class
    toggleActive () {
      this.classList.toggle ('active');
    }

    // Invoke "start ()" function

  render(){
    window.addEventListener('load', this.start);
    return (
      <div className="App">
      <header className="App-header">
      <h3>Your Poems:</h3>
      {/*{this.renderPoemTitles()}*/}
      <img src={leftArrow} className="App-logo" alt="logo" id="left" />

      </header>
      </div>
    )
  }

}
