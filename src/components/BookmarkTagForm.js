import React, { Component } from 'react';
import Modal from './Modal';

class BookmarkTagForm extends Component {
  constructor(props){
    super(props);
    this.handleTagInputChange = this.handleTagInputChange.bind(this)
    this.handleTagSubmit = this.handleTagSubmit.bind(this)
  }
  handleTagInputChange(event){
    this.props.handleTagInputChange(event)
  }
  handleTagSubmit(event){
    this.props.handleTagSubmit(event)
  }
  render(){
    const urlLabel = <div><a href={this.props.bookmarkedURL} target="_blank">{this.props.bookmarkedTitle}</a> - add tags</div>
      return(
        <Modal
          modalId='bookmarkTagInputModal'
          title="Add Tags"
          placeholder="Seperate, Tags, By, Comma"
          handleSubmit = {this.handleTagSubmit}
          label="Enter URL"
          inputValue={this.props.tagInput}
          handleChange={this.props.handleTagInputChange}
          id = {this.props.linkId}
          formLabel = {urlLabel}
          />
    )
  }
}

export default BookmarkTagForm;
