import React, {Component} from 'react'

class Profile extends Component {
  constructor(props){
    super(props)
  }
  render () {
    return(
      <div>
      {this.props.user.email}
        <a href = "javascript:window.location='localhost:3000?u='+encodeURIComponent(document.location)">bookmarklet</a>
      </div>
    )
  }
}

export default Profile
