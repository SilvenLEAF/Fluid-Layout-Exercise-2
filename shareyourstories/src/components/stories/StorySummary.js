import React from 'react'
import './../../styles/StorySummary.css'

function StorySummary({ image }) {
  return (
    <div className="card z-depth-2">
      <div className="card-image">
        <img src={ image } alt=""/>
        <button className="halfway-fab btn-floating pink pulse">
          <i className="material-icons">favorite</i>
        </button>
      </div>
      <div className="card-content">
        <div className="card-title">My Story</div>
        <p className= "truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem ullam blanditiis fugit voluptate animi illum odio impedit unde inventore. Optio nisi veniam qui ab ex, officia animi amet incidunt quia provident, magnam sit tenetur eius consequuntur iure est nobis numquam vero quod nemo tempora. Culpa molestiae esse qui numquam, distinctio, cupiditate dolores et earum quidem tenetur iste ut totam ex accusamus consectetur beatae necessitatibus officia delectus possimus suscipit. Eveniet asperiores aut obcaecati eaque sint! Asperiores numquam soluta quas tempora. Expedita nostrum excepturi delectus a voluptates rerum, quasi voluptate fugiat laudantium, autem earum aspernatur eligendi itaque consequuntur dignissimos, nam similique?</p>
      </div>
      <div className="card-action">
        <a href="#">Go to Home</a>
      </div>
    </div>
  )
}

export default StorySummary
