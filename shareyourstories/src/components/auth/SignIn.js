import React, { Component } from 'react'
import './../../styles/Form.css'

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) =>{   
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        
      <form onSubmit={ this.handleSubmit}>
        <h4 className= "pink-text">Log In</h4>
        <div className="input-field">
          <i className="material-icons prefix">mail</i>
          <input type="email" id= "email" onChange={ this.handleChange} />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <i className="material-icons prefix">memory</i>
          <input type="password" id= "password" onChange={ this.handleChange} />
          <label htmlFor="password">Password</label>
        </div>

        <div className="input-field">
          <button className="btn pink waves-effect waves-light">
            Log In
          </button>
        </div>

      </form>
      </div>
    )
  }
}

export default SignIn
