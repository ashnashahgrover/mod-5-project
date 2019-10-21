import React, { Component } from "react";
import DiscoveryV1 from 'ibm-watson/discovery/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

const discoveryClient = new DiscoveryV1({
  authenticator: new IamAuthenticator({ apikey: 'Kg5gi3pGLhVdfweq6geTQQAHDUgqxR3huTTlEaghwCG1' }),
  version: 'v5.0.0',
});

const fs = require('fs');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');

const nlu = new NaturalLanguageUnderstandingV1({
  authenticator: new IamAuthenticator({ apikey: 'Kg5gi3pGLhVdfweq6geTQQAHDUgqxR3huTTlEaghwCG1' }),
  version: '2018-04-05',
  'Access-Control-Allow-Origin': '*',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/'
});


export default class Analysis extends Component {

  analyze = () => {
    nlu.analyze(
      {
        html: this.props.poem.content, // Buffer or String
        features: {
          concepts: {},
          keywords: {}
        }
      })
      .then(response => {
        console.log(JSON.stringify(response.result, null, 2));
      })
      .catch(err => {
        console.log('error: ', err);
      });
  }

  print = () => {
    if (this.props.poem){
      this.analyze()
    }
  }

  render(){
    this.print()
    console.log("Hello")
    return (<h1>Hello</h1>)
  }

}
