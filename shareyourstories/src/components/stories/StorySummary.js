import React from 'react'
import './../../styles/StorySummary.css'


function StorySummary({ image, story }) {
  return (
      <div className="card z-depth-2">
        <div className="card-image">
          <img src={ image } alt=""/>
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
          <p className= "grey-text">{ story.createdAt.toDate().toString() }</p>
        </div>
      </div>
  )
}

export default StorySummary
