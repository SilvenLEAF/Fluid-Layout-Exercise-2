import React from 'react'
import './../../styles/StoryDetails.css'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';


function StoryDetails({ story, auth }) {
  const image = "/images/Story-Book.svg";
  if (!auth.uid) return <Redirect to= "/signin" />
  return (
    <div className="container">
      <div className="card z-depth-2 my-deatails-card">
        <div className="card-image">
          <img src={ story.imgUrl } alt=""/>
          <button className="halfway-fab btn-floating pink pulse">
            <i className="material-icons">favorite</i>
          </button>
        </div>
        <div className="card-content">
          <div className="card-title">{ story.title }</div>
          <p>{ story.content }</p>
        </div>
        <div className="card-action">
          <p className= "grey-text"> Posted by { story.authorFirstName } { story.authorLastName }</p>
          <p className= "grey-text">{ moment(story.createdAt.toDate()).calendar() }</p>
        </div>        
      </div>        
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const stories = state.firestore.data.stories;
  const story = stories ? stories[id] : null;

  return{
    story: story,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'stories' }
  ])
)(StoryDetails)
