import React, {Component} from 'react'

class LinkInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      linkInputValid:false,
      linkInputError:'',
      savedLinkInput:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    this.validateLinkInput = this.validateLinkInput.bind(this)
  }

  validateLinkInput(url){
    this.props.validateLinkInput(url)
  }

  handleChange(event){
    this.props.handleLinkInputChange(event)
  }

  handleLinkSubmit(event) {
    this.props.handleLinkSubmit(event)
  }

  render(){
    return(
      <Modal
        modalId='linkInputModal'
        title="Save a Link"
        handleSubmit = {this.handleLinkSubmit}
        label="Enter URL"
        inputValue={this.props.savedLinkInput}
        handleChange={this.props.handleLinkInputChange}
        placeholder="https://..."
        />
    )
  }
}

export default LinkInput
