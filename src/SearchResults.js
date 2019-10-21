import React, { Component } from "react";

export default class SearchResults extends Component {

  renderSearchResults = () => {
    if (this.props.searchResults != undefined) {
    return this.props.searchResults.map(result =>
      {
      return (<button className="datamuse" onClick={this.sendUp}>{result}</button>)
      }
    )
    }
  }

  sendUp = (event) =>{
    event.preventDefault()
    this.props.addToQuill(event.target.innerText)
  }

  render(){
    return (
      <>
      <h3>Results</h3>
      <div>
      {this.renderSearchResults()}
      </div><br/>
      </>
    )
  }

}

//can style out the buttons.
