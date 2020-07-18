import React, { Component } from 'react'
import './../../styles/Form.css'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

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
    this.props.signIn(this.state)
  }
  render() {
    const { authError,auth } = this.props;
    if(auth.uid) return <Redirect to= "/" />
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

          <p className="red-text center">
            { authError ? authError : null }
          </p>
        </div>

      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    signIn: (credemtials)=>{
      dispatch(signIn(credemtials))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
