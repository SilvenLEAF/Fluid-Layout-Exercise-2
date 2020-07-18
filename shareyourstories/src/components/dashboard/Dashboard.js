import React, { Component } from 'react'
import StoryList from '../stories/StoryList'
import Profile from './Profile'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    const { stories, auth, profile } = this.props;
      if (!auth.uid) return <Redirect to= "/signin" />;

    return (
      <>
        <div className="container">
        </div>
        <div className="row container">                   
          <div className="col s12 m6"> 
            <h1>Hey there!!</h1>
            <StoryList stories= { stories } />
          </div>

          <div className="col s12 m6"><Profile profile= { profile } auth= { auth } /></div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    stories: state.firestore.ordered.stories,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'stories', orderBy: ['createdAt', 'desc']}
  ])
)(Dashboard)
