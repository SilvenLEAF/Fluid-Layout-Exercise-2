import React, { Component } from 'react'
import StoryList from '../stories/StoryList'
import Profile from './Profile'
import { connect } from 'react-redux'

export class Dashboard extends Component {
  render() {
    const { stories } = this.props;
    return (
      <>
        <div className="container">
          <h1>{ stories[2].title }</h1>
        </div>
        <div className="row container">
          <div className="col s12 m6"><StoryList/></div>
          <div className="col s12 m6"><Profile/></div>
        </div>        
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    stories: state.story.stories
  }
}

export default connect(mapStateToProps)(Dashboard)
