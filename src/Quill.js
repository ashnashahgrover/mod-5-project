import React, { Component } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'; // ES6

export default class Quill extends Component {

  constructor(props) {
    super(props)
    this.state = { title: '', text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value })
  }

  ifAdd = () => {
    if (this.props.add.length > 0){
      let newString=this.state.text + this.props.add
      this.setState({text:newString}, ()=>this.props.clearAdd())
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const config ={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.text,
        user_id: this.props.currentUserID
      })
    }
    fetch("http://localhost:3000/poems",config)
    .then(resp=>resp.json())
    .then(console.log)
  }

  render() {
    this.ifAdd()
    return (
      <form onSubmit={this.handleSubmit}>
      Poem Title: <input onChange={this.handleTitleChange}/><br/><br/>
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange} /><br/>
      <input type="submit" value="submit poem" /><br/><br/>
      </form>
    )
  }

}
