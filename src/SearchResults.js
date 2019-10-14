import React, { Component } from "react";

export default class SearchResults extends Component {

  renderSearchResults = () => {
    if (this.props.searchResults != undefined) {
    return this.props.searchResults.map(result =>
      {
      return (<button onClick={this.sendUp}>{result}</button>)
      }
    )
    }
  }

  sendUp = (event) =>{
    event.preventDefault()
    console.log("button value", event.target.innerText)
    console.log("Adding to Quill")
    this.props.addToQuill(event.target.innerText)
  }

  render(){
    return (
      <div>
      <h3>Inspos</h3>
      {this.renderSearchResults()}
      </div>
    )
  }

}

//can style out the buttons. 
