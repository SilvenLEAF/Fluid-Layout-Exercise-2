import React, { Component } from 'react'
import StoryList from '../stories/StoryList'
import Profile from './Profile'

export class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Hey there!!!</h1>
        </div>
        <div className="row container">
          <div className="col s12 m6"><StoryList/></div>
          <div className="col s12 m6"><Profile/></div>
        </div>        
      </>
    )
  }
}

export default Dashboard
