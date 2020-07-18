import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


function SignedInLinks(props) {
  return (
    <>
      <li className = "hide-on-large-only"><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/create">Create Story</NavLink></li>
      <li onClick= { props.signOut }><NavLink to="/signin">Log Out</NavLink></li>
      <li className = "hide-on-large-only"><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/" className= "btn-floating pink pulse center hide-on-med-and-down">{ props.profile.initials }</NavLink></li>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=>{
      dispatch(signOut())
    }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
