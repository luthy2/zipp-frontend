import React, { Component } from 'react';
import apiClient from '../api/client';

var cli = new apiClient()

class LinkItem extends Component {
  constructor(props){
    super(props);
    this.state={
      isPublic:this.props.item.is_public
    }
    this.dismissLinkItem = this.dismissLinkItem.bind(this)
    this.toggleLinkPrivacy = this.toggleLinkPrivacy.bind(this)
    this.bookmarkLinkItem = this.bookmarkLinkItem.bind(this)
    this.handleTagSubmit = this.handleTagSubmit.bind(this)
    this.handleTagInputChange = this.handleTagInputChange.bind(this)
  }
  dismissLinkItem(linkItem){
    this.props.dismissLinkItem(this.props.item)
    console.log(this.props.item.id)
    console.log('dismiss clicked')
  }
  bookmarkLinkItem(linkItem){
    this.props.bookmarkLinkItem(this.props.item)
    console.log(this.props.item.id)
    console.log('bookmark clicked')
  }

  handleTagSubmit(event){
    this.props.handleTagSubmit(event)
  }

  handleTagInputChange(event){
    this.props.handleTagInputChange(event)
  }

  toggleLinkPrivacy(event) {
    var privacy = event.target.checked
    var message = {'is_public':privacy}
    var linkId = event.target.name
    var postData = JSON.stringify(message)
    var user = this.props.currentUser
    var queryPath = 'user/'+user+'/saved/'+linkId
    console.log(postData, user)
    var resp = cli.apiRequest(queryPath, { method:"post", body:postData, headers:{"Authorization": this.props.token, 'Accept':'application/json', 'Content-Type': 'application/json'}})
    if (resp){
      resp.then((r)=>{
        this.setState({isPublic:privacy})
      })
    }
  }
  render(){
    var date = new Date(this.props.item.timestamp)
    var timestamp = date.toDateString()
    var description = ()=>{
        if (this.props.item.description){
          var s = this.props.item.description.split(' ')
          if (s.length > 25){
            var d = s.slice(0,25).concat('...').join(' ')
            console.log(d)
            return d
          }else{
            return this.props.item.description
          }
        }else{
          return "No Description Available"
        }
      }
    console.log(description)
    return(
      <div className="row my-4">
        <div className="col">
            <div className="row">
              <div className="col">
                <h6><a href={this.props.item.link} target="_blank" className="inbox-link-text">{this.props.item.title ? this.props.item.title : this.props.item.link} </a></h6>
                <div className="inbox-link-description">{description() ? description() : 'No Description Available'}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <span m-auto>
                  <input type="button" className="btn btn-outline-primary btn-sm mr-1" value="bookmark" onClick={this.bookmarkLinkItem} data-toggle="modal" data-target="#bookmarkTagInputModal"/>
                </span>
                <span>
                  <input type="button" className="btn btn-outline-primary btn-sm m-1" value="dismiss" onClick={this.dismissLinkItem}/>
                </span>
                <span className="form-check-inline m-1">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" checked={this.state.isPublic} name={this.props.item.id} onChange={this.toggleLinkPrivacy}/>
                    public
                  </label>
                </span>
                <small className="text-muted"> saved on {timestamp}</small>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default LinkItem;
