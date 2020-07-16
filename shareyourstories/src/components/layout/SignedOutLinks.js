import React from 'react'
import { NavLink } from 'react-router-dom'


function SignedOutLinks() {
  return (
    <>
      <li className = "hide-on-large-only"><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">Sign Up</NavLink></li>
      <li><NavLink to="/">Log In</NavLink></li>
      <li className = "hide-on-large-only"><NavLink to="/">About Us</NavLink></li>
    </>
  )
}

export default SignedOutLinks
