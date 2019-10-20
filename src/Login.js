import React from 'react';

class Login extends React.Component {

  state = {
    name: "",
    password:""
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <h1>Login</h1>
        <div>
          <input type="text" name="name" placeholder="Username" />
          <label htmlFor="name">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
