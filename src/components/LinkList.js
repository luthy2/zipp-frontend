import React, { Component } from 'react';
import apiClient from '../client';
import LinkItem from './LinkItem';

class LinkList extends Component {
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this)
    this.dismissLinkItem = this.dismissLinkItem.bind(this)
    this.bookmarkLinkItem = this.bookmarkLinkItem.bind(this)
  }

  componentDidMount() {
    this.props.componentDidMount()
  }

  dismissLinkItem(linkId) {
    this.props.dismissLinkItem(linkId)
    console.log('dismiss from link list')
  }
  bookmarkLinkItem(linkId) {
    this.props.bookmarkLinkItem(linkId)
    console.log('bookmark from link list')
  }

  render() {
    const error = this.props.inboxError;
    const isLoaded = this.props.inboxIsLoaded
    const items = this.props.inboxItems
    if (error){
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
    } else {
      return  (
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            {items.map(item => (
              <LinkItem  item={item} dismissLinkItem={this.dismissLinkItem} bookmarkLinkItem={this.bookmarkLinkItem} key={item.id.toString()} token={this.props.currentUserToken} currentUser={this.props.currentUser}/>
            ))}
          </div>
        </div>
      )
    }
  }
}

export default LinkList;
