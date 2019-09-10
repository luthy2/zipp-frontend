import React, { Component } from 'react';
import Router from 'next/router'

import Nav from './Nav'
import Header from './Header'
import Head from 'next/head'
import store from '../../store'

class Page extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {

  }

  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Head>
        <Nav store={store} hide={this.props.hideNav}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page;
