import React from 'react'
import { NavLink } from 'react-router-dom'


function SignedInLinks() {
  return (
    <>
      <li className = "hide-on-large-only"><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">Create Story</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li className = "hide-on-large-only"><NavLink to="/">About Us</NavLink></li>
      <li><NavLink to="/" className= "btn-floating pink pulse center hide-on-med-and-down">FZ</NavLink></li>
    </>
  )
}

export default SignedInLinks
