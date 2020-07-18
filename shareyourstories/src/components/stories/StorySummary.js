import React from 'react'
import './../../styles/StorySummary.css';
import moment from 'moment';

function StorySummary({ story }) {
  return (
      <div className="card z-depth-2">
        <div className="card-image">
          <img src={ story.imgUrl } alt=""/>
          <button className="halfway-fab btn-floating pink pulse">
            <i className="material-icons">favorite</i>
          </button>
        </div>
        <div className="card-content">
          <div className="card-title">{ story.title }</div>
  <p className= "truncate">{ story.content }</p>
        </div>
        <div className="card-action">
          <p className= "grey-text"> Posted by { story.authorFirstName } { story.authorLastName }</p>
          <p className= "grey-text">{ moment(story.createdAt.toDate()).calendar() }</p>
        </div>
      </div>
  )
}

export default StorySummary
