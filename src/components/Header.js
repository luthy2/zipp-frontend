import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center mt-5 pt-5">
          <div className="col-md-6">
            <h4>{this.props.pageName}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
