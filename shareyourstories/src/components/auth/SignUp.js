import React, { Component } from 'react'
import './../../styles/Form.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
    const { auth } = this.props;
    if(auth.uid) return <Redirect to= "/" />

    return (
      <div className="container">
        
      <form onSubmit={ this.handleSubmit}>
        <h4 className= "pink-text">Sign Up</h4>
        <div className="input-field">
          <i className="material-icons prefix">mail</i>
          <input type="email" id= "email" onChange={ this.handleChange} />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field ">
          <i className="material-icons prefix">memory</i>
          <input type="password" id= "password" onChange={ this.handleChange} />
          <label htmlFor="password">Password</label>
        </div>

        <div className="input-field firstName-holder">
          <i className="fa fa-user prefix"></i>
          <input type="text" id= "firstName" onChange={ this.handleChange} />
          <label htmlFor="firstName">FirstName</label>
        </div>

        <div className="input-field">
          <i className="fa fa-user prefix"></i>
          <input type="text" id= "lastName" onChange={ this.handleChange} />
          <label htmlFor="lastName">LastName</label>
        </div>

        <div className="input-field">
          <button className="btn pink waves-effect waves-light">
            Sign Up
          </button>
        </div>

      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp)
