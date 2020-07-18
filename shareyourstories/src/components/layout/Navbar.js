import '../../styles/Navbar.css'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


function Navbar({ auth, profile }) {
  const links = auth.uid ? <SignedInLinks profile= { profile } /> : <SignedOutLinks/>;
  console.log(auth)
  return (
    <nav className="nav-wraper purple darken-3">
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
        { links }
      </ul>

      <ul className="right hide-on-large-only">
        { auth.uid ? <li><NavLink to="/" className= "btn-floating pink pulse center">{ profile.initials }</NavLink></li> : null }
      </ul>

      <ul className="sidenav" id="mobile-nav">
        { links }
      </ul>

      </div>
    </nav>
  )
}

const mapStateToProps = (state) =>{
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
