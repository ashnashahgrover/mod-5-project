import React, { Component } from "react";
import SearchResults from './SearchResults'

export default class SearchContainer extends Component {

    state = {
        search: null,
        results: []
    }

    controlledForm = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    handleSubmit = (event) => {
       event.preventDefault()

       if (event.target.classList.contains("datamuse")){
         fetch(`https://api.datamuse.com/words?${event.target.id}=${this.state.search}`)
          .then(resp=>resp.json())
          .then(data=> {
            this.shuffle(data)
            let words = data.map(wordObject=>wordObject["word"]).slice(0,26)
            this.setState({results: words})
          })
       }
    }

    render(){
        return (
        <>
        <form>
        Search for a word or phrase<br/>
        <input onChange={this.controlledForm}/><br/>
        <input id="ml" onClick={this.handleSubmit} className="datamuse" value="synonym" type="submit"/>
        <input id="antonym" disabled onClick={this.handleSubmit} value="antonym" type="submit"/>
        <input id="allPoems" disabled onClick={this.handleSubmit} value="a line of published poetry with this word" type="submit"/><br/>
        <input id="rel_rhy" className="datamuse" onClick={this.handleSubmit} value="rhymes with" type="submit"/>
        <input id="sl" className="datamuse" onClick={this.handleSubmit} value="sounds like" type="submit"/>
        <input id="rel_trg" className="datamuse" onClick={this.handleSubmit} value="often associated with" type="submit"/><br/>
        <input id="rel_jja" className="datamuse" onClick={this.handleSubmit} value="often used to describe (adj)" type="submit"/>
        <input id="rel_jjb" className="datamuse" onClick={this.handleSubmit} value="often described as (noun)" type="submit"/>
        <input id="sp" className="datamuse" onClick={this.handleSubmit} value="spelled similarly" type="submit"/><br/>
        <br/>
        <SearchResults addToQuill={this.props.addToQuill} searchResults={this.state.results}/>
        </form>
        </>
        )
    }

}













//https://www.datamuse.com/api/






// if (event.target.id==="synonym"){
//     fetch(`https://wordsapiv1.p.mashape.com/words/${this.state.search}/synonyms`,  {
//      "method": "GET",
//      "headers": {
//          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
//          "x-rapidapi-key": "44b2196698mshed0a42f8c708b87p101c5bjsn75eb94ca3f82"
//          //does this need to be hidden in a .env file?
//      }
//  })
//     .then(resp=>{
//       console.log(resp.status)
//       if (resp.status === 200){return resp.json()}
//       else {return "Word not Found"}
//     })
//     .then(data => {
//       this.setState({results: data.synonyms})
//     })
//     .catch(error => console.log(error))
// }
