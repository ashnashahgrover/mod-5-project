import React, { Component } from "react";

export default class SearchContainer extends Component {

    state = {
        search: null
    }

    controlledForm = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
       event.preventDefault() 
       console.log(event.target.id)
       if (event.target.id==="synonym"){
           fetch(`https://wordsapiv1.p.mashape.com/words/${this.state.search}/synonyms`,  {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "44b2196698mshed0a42f8c708b87p101c5bjsn75eb94ca3f82"
                //does this need to be hidden in a .env file?
            }
        })
           .then(resp=>resp.json())
           .then(console.log)
       }
    }

    render(){
        return (
        <>
        <form>
        Search for a word<br/>
        <input onChange={this.controlledForm}/><br/>
        <input id="synonym" onClick={this.handleSubmit} value="synonym" type="submit"/>
        <input id="antonym" onClick={this.handleSubmit} value="antonym" type="submit"/>
        <input id="allPoems" onClick={this.handleSubmit} value="a line of published poetry with this word" type="submit"/>
        </form>
        </>
        )
    }

} 

//https://www.datamuse.com/api/