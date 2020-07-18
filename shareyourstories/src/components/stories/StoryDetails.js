import React from 'react'
import './../../styles/StoryDetails.css'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

function StoryDetails({ story }) {
  const image = "/images/Story-Book.svg";
  return (
    <div className="container">
      <div className="card z-depth-2 my-deatails-card">
        <div className="card-image">
          <img src={ image } alt=""/>
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
          <p className= "grey-text">{ story.createdAt.toDate().toString() }</p>
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
    story: story
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'stories' }
  ])
)(StoryDetails)
