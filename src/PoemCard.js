import React, { Component } from "react";
import leftArrow from './left-arrow.svg'
var demoButtons

export default class PoemsContainer extends Component {

  render(){
    return (
      <div className="App">
      <header className="App-header">

      <section class="wrapper">

        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item  js-modify  active" data-target=".card" data-effect="zoom">Title</li>
            <li class="menu__item  js-modify" data-target=".card" data-effect="blur" >Content</li>
          </ul>
        </nav>

        <div class="card" data-effect="zoom">
          <button class="card__save  js-save" type="button">
            <i class="fa  fa-bookmark"></i>
           </button>
          <figure  class="card__image">
            <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description"/>
          </figure>
          <div class="card__header">
            <figure class="card__profile">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg" alt="Short description"/>
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__name">{this.props.poem ? this.props.poem.title : null}</h3>
            <p class="card__job">astronaut & engineer</p>
            <p class="card__bio"> American astronaut, engineer, and the first person to walk on the Moon.</p>
          </div>
          <div class="card__footer">
            <p class="card__date">Feb 10 2018</p>
            <p class=""></p>
          </div>
        </div>

      </section>

      </header>
      </div>
    )
  }

}
