import React, { Component } from 'react';

class QuickShare extends Component {
  constructor(props){
    super(props)

    this.state = {
      linkInput:'',
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {

  }

  handleSubmit(event){
    // this.props.handleSubmit(event)
  }

  handleChange (event) {
    // this.props.handleChange(event)
  }

  render () {
    return (
      <div>
        <div> QuickShare </div>
        <input type="text" name= "linkInput" value={this.state.linkInput} onChange={this.handleChange} className="form-control" placeholder="www.example.com"/>
      </div>
    )
  }
}

export default QuickShare;
