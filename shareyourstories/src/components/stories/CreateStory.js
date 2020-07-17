import React, { Component } from 'react'
import './../../styles/Form.css'

export class CreateStory extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) =>{   
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        
      <form onSubmit={ this.handleSubmit}>
        <h4 className= "pink-text">Create Story</h4>
        
        <div className="input-field">
          <i className="fa fa-book prefix"></i>
          <input type="text" id= "title" onChange={ this.handleChange} />
          <label htmlFor="title">Title</label>
        </div>

        <div className="input-field">
          <i className="fa fa-book prefix"></i>
          <input type="text" id= "content" onChange={ this.handleChange} />
          <label htmlFor="content">Content</label>
        </div>

        <div className="input-field">
          <button className="btn pink waves-effect waves-light">
            Create
          </button>
        </div>

      </form>
      </div>
    )
  }
}

export default CreateStory
