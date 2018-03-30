import React, { Component } from 'react';

class Modal extends Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event){
    this.props.handleSubmit(event)
  }

  handleChange(event){
    this.props.handleChange(event)
  }

  render(){
    var modaLabel = this.props.modalId.concat('Label')

    var formLabel =() =>{if (this.props.formLabel){
      console.log(this.props.formLabel)
      return <label>{this.props.formLabel}</label>
    }}
    return(
      <div className="modal fade" id={this.props.modalId} tabindex="-1" role="dialog" aria-labelledby={modaLabel} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="linkInputModalLabel">{this.props.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div className="modal-body">
              <form className="form-inline" onSubmit={this.props.handleSubmit}>
                <label className= "sr-only"> {this.props.label}</label>
                {formLabel()}
                  <input type="text"  value={this.props.inputValue} placeholder={this.props.placeholder} className="form-control form-control-sm mr-1" onInput={this.props.handleChange} id={this.props.id}/>
                <input type="submit" value="Save" className="btn btn-primary btn-sm" data-toggle="modal" data-target={"#"+this.props.modalId}/>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
