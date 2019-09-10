import React, { Component } from 'react';
import { connect } from "react-redux";
import Router from 'next/router'
import apiClient from '../api/client';
import LinkItem from './LinkItem';
import { getSavedLinks } from "../../actions/index";

class LinkList extends Component {
  constructor(props){
    super(props);
    this.dismissLinkItem = this.dismissLinkItem.bind(this)
    this.bookmarkLinkItem = this.bookmarkLinkItem.bind(this)
  }

  componentWillMount () {
    // console.log(this.props.user.token)
    this.props.getSavedLinks(this.props.user.email, this.props.user.token)
  }

  componentDidMount () {
    // const currentUser = this.state.currentUser
    // const token = this.state.currentUserToken
    // const queryPath = apiBase+'user/'+currentUser+'/saved'
    // var resp = apiClient.apiRequest(queryPath, {headers:{'Authorization':token}})
    // if (resp){
    //   resp.then((r)=>{
    //     this.setState({
    //           inboxIsLoaded: true,
    //           inboxItems:r,
    //         })
    //   })
    // }
  }

  dismissLinkItem (linkId) {
    // this.props.dismissLinkItem(linkId)
  }

  bookmarkLinkItem (linkId) {
    // this.props.bookmarkLinkItem(linkId)
  }

  render () {
    const error = this.props.inboxError;
    const isLoaded = this.props.inboxIsLoaded
    const items = this.props.savedLinks

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

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user,
    savedLinks: state.savedLinks
  }
}

const  mapDispatchToProps = dispatch => {
  return {
    getSavedLinks: (email, token) => dispatch(getSavedLinks(email, token))
  };
}
const Inbox = connect(mapStateToProps, mapDispatchToProps)(LinkList);

export default Inbox;
