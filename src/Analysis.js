import React, { Component } from "react";

export default class Analysis extends Component {

  parseJSON = () => {
    if (this.props.poem.nlu){
    let nlu = JSON.parse(this.props.poem.nlu)
    return (
      <div className="card__body">

      <h1>Sentiment:</h1>
      <li>{nlu.sentiment.document.label}, Score: {nlu.sentiment.document.score}</li>
      <br/>
      <div>
      <h1>Emotion:</h1>
      <li>Anger:{nlu.emotion.document.emotion.anger}</li>
      <li>Disgust:{nlu.emotion.document.emotion.disgust}</li>
      <li>Fear:{nlu.emotion.document.emotion.fear}</li>
      <li>Joy:{nlu.emotion.document.emotion.joy}</li>
      <li>Sadness:{nlu.emotion.document.emotion.sadness}</li>

      </div>

      </div>
    )}
    else {return null}
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">

      <section className="wrapper">

        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item  js-modify" data-target=".card" data-effect="zoom" id="poem" onClick={this.props.change}>Poem</li>
            <li className="menu__item  js-modify" data-target=".card" data-effect="blur" id="analysis" onClick={this.props.change}>Analysis</li>
          </ul>
        </nav>

        <div className="card" data-effect="zoom">
          <button className="card__save  js-save" type="button">
            <i className="fa  fa-bookmark"></i>
           </button>
          <figure  className="card__image">
            <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description"/>
          </figure>
          {/* <div className="card__header">
            <figure className="card__profile">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg" alt="Short description"/>
            </figure>
          </div> */}
          <div className="card__body">
            <h1 className="card__footer">{this.props.poem ? this.props.poem.title : null}</h1><br/>
            <p className="card__bio">{this.props.poem ? this.parseJSON() : null}</p>
          </div><br/><br/><br/><br/>
          <div className="card__footer">
            <p className="card__date">Written at: {this.props.poem ? new Date(Date.parse(this.props.poem.created_at)*1e3).toLocaleTimeString("en-US", {timeZone: "America/New_York"})  : null}</p>
            <p className=""></p>
          </div>
        </div>

      </section>

      </header>
      </div>
    )
  }

}
