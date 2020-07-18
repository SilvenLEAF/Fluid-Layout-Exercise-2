import React, { Component } from 'react'
import './../../styles/Form.css'
import { connect } from 'react-redux'
import { createStory } from '../../store/actions/storyActions'
import { Redirect } from 'react-router-dom'

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
    this.props.createStory(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to= "/signin" />
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

const mapStateToProps = (state)=>{
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    createStory: (story)=>{
      dispatch(createStory(story))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateStory)
