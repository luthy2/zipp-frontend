class ControlledCheckbox extends Component{
  constructor (props) {
    super(props);
    this.state = {
      isChecked:false;
    }
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  toggleCheckbox (event) {
    this.setState({isChecked:!isChecked})
    console.log(this.state.isChecked)
    this.handleCheckboxChange(event)
  }

  handleCheckboxChange (event) {
    this.props.handleCheckboxChange(event)
  }

  render () {
    return(
      <input type="checkbox" value=this.props.value checked=this.state.isChecked onChange={this.toggleCheckboxChange} key={this.props.value}>{this.props.label}</input>
    )
  }
}
