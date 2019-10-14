import React, { Component } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'; // ES6

export default class Quill extends Component {

  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    console.log(value)
    this.setState({ text: value })
  }

  ifAdd = () => {
    if (this.props.add.length > 0){
      let newString=this.state.text + this.props.add
      this.setState({text:newString}, ()=>this.props.clearAdd())
    }
  }

  render() {
    this.ifAdd()
    return (
      <>
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange} /><br/>
      <input type="submit" value="submit poem" />
      </>
    )
  }

}
