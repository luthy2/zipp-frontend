import React, { Component } from 'react';
import {connect} from 'react-redux'
import Router from 'next/router'
import {registerUser} from "../../actions/index";
import ApiClient from '../api/client.js'
import validators from '../utils/validators'

class RegisterForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: '',
      confirmPasswordInput: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]:value})
  }

  handleSubmit (event) {
    event.preventDefault()

    // validate email and password
    if (validators.validateEmail(this.state.emailInput)) {
      if (validators.validatePassword(this.state.passwordInput)) {
        if (this.state.passwordInput === this.state.confirmPasswordInput) {
          this.props.registerUser(this.state.emailInput, this.state.passwordInput, this.state.confirmPasswordInput)
        } else {
          // dispatch password mismatch error
        }
      } else {
        // dispatch invalid password error
      }
    } else {
      // dispatch invalid email error
    }
  }

  render () {
    return(
      <div className="container-fluid">
        <div className="row justify-content-md-center pt-5">
          <div className="">
            <h3 className="text-center">Register</h3>
            <form  className="form-group" onSubmit={this.handleSubmit}>
              <div className="m-1">
                <input className="form-control" type="text" name= "emailInput" value={this.state.emailInput} onChange={this.handleChange} className="form-control my-1" placeholder="john@example.com"/>
              </div>
              <div className="m-1">
                <input className="form-control" type="password" name="passwordInput" value={this.state.passwordInput} onChange={this.handleChange} className="form-control" placeholder="password"/>
              </div>
              <div className="m-1">
                <input className="form-control" type="password" name="confirmPasswordInput" value={this.state.confirmPasswordInput} onChange={this.handleChange} className="form-control" placeholder="password"/>
              </div>
              <input type="submit" value="Register" className="btn btn-primary btn-block my-1"/>
            </form>
            already have an account? <a href="/login">log in</a>
          </div>
        </div>
      </div>
    )
  }
}

const  mapDispatchToProps = dispatch => {
  return {
    registerUser: (email, password, confirmPassword) => dispatch(registerUser(email, password, confirmPassword))
  };
}
const Register = connect(null, mapDispatchToProps)(RegisterForm);

export default Register
