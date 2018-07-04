import React, { Component } from 'react';

class MultiSelect extends Component{
  constructor(props){
    super(props)
    this.state ={
      selected: null
    }
  }

  componentDidMount(){
    selectedItems = new Set()
    this.setState({selected: selectedItems})
  }

  handleCheckboxChange(event){
    const selected = this.state.selected
    if (selected.has(event.target.value)){
      selected.delete(event.target.value)
    } else{
      selected.add(event.target.value)
    }
    this.setState({selected:selected})
    console.log(this.state)
  }

  render(){
    const items = {this.props.items}
    const checkboxList
    return(
      items.map(item=>
        <ControlledCheckbox handleCheckboxChange={this.handleCheckboxChange} />
      )
    )
  }
}
