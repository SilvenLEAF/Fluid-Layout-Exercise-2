import React from 'react'
import StorySummary from './StorySummary'
import { Link } from 'react-router-dom'

function StoryList({ stories }) {
  return (
    <>
      { stories && stories.map( story => {
        return (
          <Link to= { "/story/" + story.id } key= { story.id } >
            <StorySummary className="" image= { "./images/Story-Book.svg" } story= { story } /> 
          </Link>
        )
      }) }  
    </>
  )
}

export default StoryList
