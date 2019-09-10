import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from "../../actions/index"

class Nav extends Component {
  constructor(props){
    super(props)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleNavChange(event){
    this.props.handleNavChange(event)
  }

  handleSignOut (event) {
    event.preventDefault()
    this.props.logoutUser()
  }

  render () {
    if (this.props.hide) {
      return null
    } else {
      return(
        <div className="navbar navbar-expand-lg fixed-top p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" role="navbar">
          <a id="brand" className="navbar-brand">Zipp</a>
            <div className="navbar-nav mr-auto">
                <a id="inbox" href ="/inbox" className="nav-item nav-link">Inbox</a>
                <a id="bookmarks" href="/bookmarks" onClick={this.props.handleNavChange} className="nav-item nav-link">Bookmarks</a>
            </div>
            <div className="navbar-nav">
                <button className="btn btn-sm btn-outline-primary" type="button"  data-toggle="modal" data-target="#linkInputModal">Save</button>
                <a id="profile" href="/profile" className="nav-item nav-link mr-auto" onClick={this.props.handleNavChange}>{this.props.currentUser}</a>
                <a id="signOut" href="" onClick={this.handleSignOut} className="nav-item nav-link mr-auto">sign out</a>
            </div>
        </div>
      )
    }
  }
}

const  mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
}
const ConnectedNav = connect(null, mapDispatchToProps)(Nav);
export default ConnectedNav;
