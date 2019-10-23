import React, { Component } from "react";
import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'
import PoemCard from './PoemCard'
import Analysis from './Analysis'
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';

export default class PoemsContainer extends Component {

  state = {
    poems: [],
    counter: 0,
    which: "analysis"
  }

  changeWhich = (event) => {
    if (event.target.id==="poem"){this.setState({which:"poem"})}
    else {this.setState({which:"analysis"})}
  }

  componentDidMount(){
    fetch(`http://localhost:3000/user_poems/${this.props.currentUserID}`)
    .then(resp=> resp.json())
    .then(data=>this.setState({poems: data}))
  }

  renderPoemTitles = () => {
    return this.state.poems.map(e=><li>{e.content}</li>)
  }

  moveForward = () => {
    let current = this.state.counter
    if (current !== this.state.poems.length - 1){
      this.setState({counter: current+1})
    }
    else {this.setState({counter: 0})}
  }

  moveBackward = () => {
    let current = this.state.counter
    if (current !== 0){
      this.setState({counter: current-1})
    }
    else {this.setState({counter: this.state.poems.length-1})}
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
      {/*{this.renderPoemTitles()}*/}
      <img  src={leftArrow} onClick={this.moveBackward} className="App-logo arrow" alt="logo" id="left" />
      <img src={rightArrow} onClick={this.moveForward} className="App-logo arrow" alt="logo" id="right" />
      {this.state.which==="poem" ?
      <PoemCard change={this.changeWhich} poem={this.state.poems[this.state.counter]}/>
      :
      <Analysis change={this.changeWhich} poem={this.state.poems[this.state.counter]}/>
      }
      </header>
      </div>
    )
  }

}
