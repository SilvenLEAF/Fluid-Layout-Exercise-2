import React, { Component } from 'react'
import StoryList from '../stories/StoryList'
import Profile from './Profile'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

export class Dashboard extends Component {
  render() {
    const { stories } = this.props;
    return (
      <>
        <div className="container">
          <h1>Hey there!!</h1>
        </div>
        <div className="row container">
          <div className="col s12 m6"><StoryList stories= { stories } /></div>
          <div className="col s12 m6"><Profile/></div>
        </div>        
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    stories: state.firestore.ordered.stories
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'stories' }
  ])
)(Dashboard)
