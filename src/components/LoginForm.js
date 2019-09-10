import React, { Component } from 'react';
import Router from 'next/router'
import { connect } from "react-redux";
import { loginUser, validateToken } from "../../actions/index";
import cookie from 'cookie'


class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount () {
  //   this.props.loginWillMount()
  //   if (this.props.user.token) {
  //     Router.replace('/inbox')
  //   } else {
  //     if (process.browser) {
  //       let token = cookie.parse(document.cookie)['zipp-token']
  //       if (token) {
  //         this.props.validateToken(token)
  //       }
  //     }
  //   }
  // }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]:value})
  }

  handleSubmit (event) {
    // this.props.onSubmitAuth(event)
    event.preventDefault()
    this.props.loginUser(this.state.emailInput, this.state.passwordInput)
  }



  render () {
    return (
        <div className="container-fluid">
          <div className="row justify-content-md-center pt-5">
            <div className="">
              <form  className="form-group" onSubmit={this.handleSubmit}>
                <div>
                  <input className="form-control" type="text" name= "emailInput" value={this.state.emailInput} onChange={this.handleChange} className="form-control my-1" placeholder="john@example.com"/>
                </div>
                <div>
                  <input className="form-control" type="password" name="passwordInput" value={this.state.passwordInput} onChange={this.handleChange} className="form-control" placeholder="password"/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block my-1"/>
              </form>
              <div>
                or <a href="/signup">signup</a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user,
    savedLinks: state.savedLinks
  }
}

const  mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    validateToken: (token) => dispatch(validateToken(token))
  };
}

const ConnectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default ConnectedLoginForm
