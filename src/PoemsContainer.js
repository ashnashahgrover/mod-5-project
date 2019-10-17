import React, { Component } from "react";

export default class AppContainer extends Component {

  state = {
    poems: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/user_poems/${this.props.currentUserID}`)
    .then(resp=>resp.json())
    .then(data=>this.setState({poems: data}))
  }

  renderPoemTitles = () => {
    return this.state.poems.map(e=><li>{e.content}</li>)
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
      <h3>Your Poems:</h3>
      {this.renderPoemTitles()}
      </header>
      </div>
    )
  }

}
