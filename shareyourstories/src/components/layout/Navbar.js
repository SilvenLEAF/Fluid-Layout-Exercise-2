import '../../styles/Navbar.css'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


function Navbar() {
  return (
    <nav className="nav-wraper green darken-4">
      <div className="container">

      <Link to= "/" className= "brand-logo">Our Stories</Link>
      <div className="sidenav-trigger hide-on-large-only" data-target= "mobile-nav">
        <div className="ham">
          <div className="ham-t"></div>
          <div className="ham-m"></div>
          <div className="ham-b"></div>
        </div>
      </div>
      

      <ul className="right hide-on-med-and-down">
        <SignedOutLinks/>
        <SignedInLinks/>
      </ul>

      <ul className="right hide-on-large-only">
        <li><NavLink to="/" className= "btn-floating pink pulse center">FZ</NavLink></li>
      </ul>

      <ul className="sidenav" id="mobile-nav">
        <SignedOutLinks/>
        <SignedInLinks/>
      </ul>

      </div>
    </nav>
  )
}

export default Navbar
