import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import apiClient from './client';
import Header from './components/Header'
import Modal from './components/Modal'

var apiBase = null
if (window.location.host === 'localhost:3000'){
  apiBase = 'http://localhost:5000/api/'
}else{
  apiBase = 'https://zipp-api.herokuapp.com/api/'
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userValidated:false,
      currentUser:'',
      currentUserToken:'',
      emailInput:'',
      passwordInput:'',
      savedLinkInput:'',
      linkInputValid:false,
      inboxItems:null,
      inboxError:null,
      inboxIsLoaded:false,
      tagInput:'',
      bookmarkedId:'',
      bookmarkedURL:'',
      bookmarkedTitle:'',
      navigation:'inbox',
    }
    this.handleAuthChange = this.handleAuthChange.bind(this)
    this.handleAuthSubmit = this.handleAuthSubmit.bind(this)
    this.handleLinkInputChange = this.handleLinkInputChange.bind(this)
    this.handleLinkSubmit = this.handleLinkSubmit.bind(this)
    this.inboxDidMount = this.inboxDidMount.bind(this)
    this.dismissLinkItem = this.dismissLinkItem.bind(this)
    this.bookmarkLinkItem = this.bookmarkLinkItem.bind(this)
    this.handleNavChange = this.handleNavChange.bind(this)
    this.handleTagInputChange = this.handleTagInputChange.bind(this)
    this.handleTagSubmit = this.handleTagSubmit.bind(this)
    // this.loginWillMount = this.loginWillMount.bind(this)
    this.loginDidMount = this.loginDidMount.bind(this)
    this.googleDidAuth = this.googleDidAuth.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleNavChange(event){
    event.preventDefault()
    const value = event.target.id
    this.setState({navigation:value})
    console.log(this.state)
  }

  handleAuthChange(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]:value})
    console.log(this.state)
  }
  handleAuthSubmit(event){
    event.preventDefault()
    var p = {email:this.state.emailInput, password:this.state.passwordInput}
    var postData = JSON.stringify(p)
    var queryPath = apiBase+'authenticate'
    console.log(typeof postData)
    var resp = apiClient.apiRequest(queryPath, {method:"post", body:postData, headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}} )
    if (resp){
      resp.then((r)=>{
        this.setState({
              userValidated: true,
              currentUser: r.email,
              currentUserToken: r.token,
              passwordInput:'',
              emailInput:''
            })
      })
    }
    console.log(resp)
  }

  handleLinkInputChange(event){
    console.log('saved link input set as: '+event.target.value)
    this.setState({savedLinkInput: event.target.value}, function checkValidity(){
      this.validateLinkInput()
    })
  }

  validateLinkInput(){
    var exp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    var regexp = new RegExp(exp);
    if (this.state.savedLinkInput.match(regexp)){
      return this.setState({linkInputValid:true})
    } else {
      return this.setState({linkInputValid:false})
    }
  }

  handleLinkSubmit(event){
    event.preventDefault();
    if(this.state.linkInputValid){
      var p = {url:this.state.savedLinkInput}
      var postData = JSON.stringify(p)
      var token = this.state.currentUserToken
      var user = this.state.currentUser
      var queryPath = apiBase+"user/"+user+"/saved"
      var resp = apiClient.apiRequest(queryPath, {method:"post", body:postData, headers:{'Authorization':token, 'Accept':'application/json', 'Content-Type': 'application/json'}})
      console.log(resp)
      if (resp){
        resp.then((r)=>{
            this.setState({
              linkInputValid: false,
              savedLinkInput:'',
              showLinkInputModal:false,
              inboxItems:[...this.state.inboxItems, r]
            })
            alert('link saved')
          })
      }
    }
    console.log(this.state)

  }

  handleTagInputChange(event){
    this.setState({tagInput:event.target.value})
    console.log(this.state.tagInput)
  }

  handleTagSubmit(event){
    event.preventDefault();
    const email = this.state.currentUser
    const token = this.state.currentUserToken
    const bookmarkId = this.state.bookmarkedId
    var t = {'tags': this.state.tagInput}
    const postData = JSON.stringify(t)
    const queryPath =apiBase+'user/'+email+'/bookmarked/'+bookmarkId
    var resp = apiClient.apiRequest(queryPath, {method:'post', body:postData, headers:{'Authorization':token, 'Content-Type':'application/json', 'Accept':'application/json'}})
    if (resp){
      resp.then((r)=>{
        this.setState({bookmarkedId:null, tagInput:'', bookmarkedURL:null})
      })
    }
  }

  loginDidMount(){
    var self = this
    window.gapi.load('auth2', function() {
      const auth2 = window.gapi.auth2.init({
        client_id:'286746406943-p2lm1le00lkjdj57kidldjqjh4s8snci.apps.googleusercontent.com',
      });
      auth2.then(auth=>auth.isSignedIn.get())
        .then((result)=>{
          console.log(result)
          if (result){
            auth2.then(auth=>auth.currentUser.get())
              .then((user)=>{
                console.log(user)
                if (user){
                  self.googleDidAuth()
                }
              })
          } else {
            auth2.then(auth=>auth.isSignedIn.listen(self.googleDidAuth))
          }
        })
    })
  }

  googleDidAuth(){
    var self=this
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.then(auth=>auth.currentUser.get())
      .then((user)=>user.getAuthResponse())
        .then((resp)=>{
          self.verifyGoogleLogin(resp.id_token)
        })
    }

  verifyGoogleLogin(id_token){
    console.log(id_token)
    const p = {'id_token':id_token}
    console.log(p)
    const postData = JSON.stringify(p)
    const queryPath = apiBase+'googleoauth'
    var resp = apiClient.apiRequest(queryPath, {method:'post', body:postData, headers:{'Accept':'application/json', 'Content-Type': 'application/json'}})
    if (resp){
      resp.then((r)=>{
        console.log(r)
        this.setState({
              userValidated: true,
              currentUser: r.email,
              currentUserToken: r.token,
              passwordInput:'',
              emailInput:''
            })
      })
    }
  }
  handleSignOut(){
    var auth2 = window.gapi.auth2.getAuthInstance();
     auth2.signOut().then(function () {
     console.log('User signed out.');
   });
   this.setState({
     userValidated:false,
     currentUser:null,
     currentUserToken:null,
     passwordInput:'',
     emailInput:''
   })
  }

  inboxDidMount(){
    console.log(this.state)
    const currentUser = this.state.currentUser
    const token = this.state.currentUserToken
    const queryPath = apiBase+'user/'+currentUser+'/saved'
    var resp = apiClient.apiRequest(queryPath, {headers:{'Authorization':token}})
    if (resp){
      resp.then((r)=>{
        this.setState({
              inboxIsLoaded: true,
              inboxItems:r,
            })
      })

    }
  }

  dismissLinkItem(linkItem){
    var message = {'is_dismissed':true}
    var postData = JSON.stringify(message)
    var user = this.state.currentUser
    console.log(postData, user)
    const queryPath = apiBase+'user/'+user+'/saved/'+linkItem.id
    var resp = apiClient.apiRequest(queryPath, { method:"post", body:postData, headers:{"Authorization": this.state.currentUserToken, 'Accept':'application/json', 'Content-Type': 'application/json'}})
    if (resp){
      resp.then((r)=>{
        var items = this.state.inboxItems
        var i = items.indexOf(linkItem)
        items.splice(i,1)
        this.setState({inboxItems:items})
      })

    }
  }


  bookmarkLinkItem(linkItem){
    this.setState({bookmarkedId:linkItem.id, bookmarkedURL:linkItem.link, bookmarkedTitle:linkItem.title})
    var message = {'is_bookmarked':true}
    var postData = JSON.stringify(message)
    var user = this.state.currentUser
    var queryPath= apiBase+'user/'+user+'/saved/'+linkItem.id
    console.log(postData, user)
    var resp = apiClient.apiRequest(queryPath, { method:"post", body:postData, headers:{"Authorization": this.state.currentUserToken, 'Accept':'application/json', 'Content-Type': 'application/json'}})
    if (resp){
      resp.then((r)=>{
        var items = this.state.inboxItems
        var i = items.indexOf(linkItem)
        items.splice(i,1)
        this.setState({inboxItems:items})
        console.log(this.state)
      })
    }
  }

  render() {
    const nav = this.state.navigation
    var page = null
    if (nav==="inbox"){
      page = <LinkList currentUser={this.state.currentUser} currentUserToken={this.state.currentUserToken} inboxItems = {this.state.inboxItems} componentDidMount={this.inboxDidMount} inboxIsLoaded={this.state.inboxIsLoaded} inboxError={this.props.inboxError} dismissLinkItem={this.dismissLinkItem} bookmarkLinkItem={this.bookmarkLinkItem}/>
    } else if (nav==="bookmarks"){
      page = <BookmarkList currentUserToken={this.state.currentUserToken} currentUser={this.state.currentUser}/>
    } else if (nav==="profile"){
      page = <Profile currentUser={this.state.currentUser}/>
    } else if (nav === "bookmarklet"){
      page = <Bookmarklet/>
    }
    if (this.state.userValidated){
      return (
        <div>
          <Nav handleNavChange={this.handleNavChange} handleSignOut={this.handleSignOut} currentUser={this.state.currentUser}
          showLinkInputModal={this.showLinkInputModal}/>
          <Header pageName={this.state.navigation}/>
          <div className="container-fluid pt-2">
          <BookmarkTagForm
            handleTagSubmit={this.handleTagSubmit}
            handleTagInputChange={this.handleTagInputChange}
            tagInput = {this.state.tagInput}
            bookmarkedId = {this.state.bookmarkedId}
            bookmarkedURL = {this.state.bookmarkedURL}
            bookmarkedTitle = {this.state.bookmarkedTitle}
          />
          <LinkInput
                      currentUser={this.state.currentUser}
                      currentUserToken={this.state.currentUserToken}
                      handleLinkInputChange={this.handleLinkInputChange}
                      handleLinkSubmit={this.handleLinkSubmit}
                      validateLinkInput={this.validateLinkInput}
                      savedLinkInput={this.state.savedLinkInput}
                      linkInputValid={this.state.linkInputValid}
                      showLinkInputModal={this.state.showLinkInputModal}
                      />
          {page}
          </div>
        </div>
      )
    } else {
      return(
        <LoginForm emailInput={this.state.emailInput} passwordInput={this.state.passwordInput} onInputChange={this.handleAuthChange} onSubmitAuth={this.handleAuthSubmit}
        loginDidMount={this.loginDidMount}/>
      )
    }
  }
}



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
    var queryPath = apiBase+'user/'+user+'/saved/'+linkId
    console.log(postData, user)
    var resp = apiClient.apiRequest(queryPath, { method:"post", body:postData, headers:{"Authorization": this.props.token, 'Accept':'application/json', 'Content-Type': 'application/json'}})
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

class BookmarkTagForm extends Component {
  constructor(props){
    super(props);
    this.handleTagInputChange = this.handleTagInputChange.bind(this)
    this.handleTagSubmit = this.handleTagSubmit.bind(this)
  }
  handleTagInputChange(event){
    this.props.handleTagInputChange(event)
  }
  handleTagSubmit(event){
    this.props.handleTagSubmit(event)
  }
  render(){
    const urlLabel = <div><a href={this.props.bookmarkedURL} target="_blank">{this.props.bookmarkedTitle}</a> - add tags</div>
      return(
        <Modal
          modalId='bookmarkTagInputModal'
          title="Add Tags"
          placeholder="Seperate, Tags, By, Comma"
          handleSubmit = {this.handleTagSubmit}
          label="Enter URL"
          inputValue={this.props.tagInput}
          handleChange={this.props.handleTagInputChange}
          id = {this.props.linkId}
          formLabel = {urlLabel}
          />
    )
  }
}

class LinkInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      linkInputValid:false,
      linkInputError:'',
      savedLinkInput:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    this.validateLinkInput = this.validateLinkInput.bind(this)
  }

  validateLinkInput(url){
    this.props.validateLinkInput(url)
  }

  handleChange(event){
    this.props.handleLinkInputChange(event)
  }

  handleLinkSubmit(event) {
    this.props.handleLinkSubmit(event)
  }

  render(){
    return(
      <Modal
        modalId='linkInputModal'
        title="Save a Link"
        handleSubmit = {this.handleLinkSubmit}
        label="Enter URL"
        inputValue={this.props.savedLinkInput}
        handleChange={this.props.handleLinkInputChange}
        placeholder="https://..."
        />
    )
  }
}

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      emailInput:'',
      psaswordInput:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.props.onInputChange(event)
  }

  handleSubmit(event){
    this.props.onSubmitAuth(event)
  }

  // componentWillMount(){
  //   this.props.loginWillMount()
  // }

  componentDidMount(){
    this.props.loginDidMount()
  }

  render(){
    var gSignInStyle : {
      width:500
    }
    return(
      <div className="container-fluid">
        <div className="row justify-content-md-center pt-5">
          <div className="">
            <h3 className="text-center">Login</h3>
            <form  className="form-group" onSubmit={this.handleSubmit}>
              <div>
                <input type="text" name= "emailInput" value={this.props.emailInput} onChange={this.handleChange} className="form-control my-1" placeholder="john@example.com"/>
              </div>
              <div>
                <input type="password" name= "passwordInput" value={this.state.passwordInput} onChange={this.handleChange} className="form-control" placeholder="password"/>
              </div>
              <input type="submit" value="Login" className="btn btn-primary btn-block my-1"/>
            </form>
          <div className="text-center mb-2">or</div>
          <div class="g-signin2" data-width="350"></div>
          </div>
        </div>
      </div>
    )
  }
}


class BookmarkList extends Component {
  constructor(props){
    super(props)
    this.state ={
      items:[]
    }
  }
  componentWillMount(){
    const currentUser = this.props.currentUser
    const token = this.props.currentUserToken
    const queryPath = apiBase+'user/'+currentUser+'/bookmarked'
    var resp = apiClient.apiRequest(queryPath, {headers:{'Authorization':token}})
    if (resp){
      resp.then((r)=>{
        this.setState({items:r})
        console.log(this.state)
      })
    }
  }
  render(){

    return(
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          {this.state.items.map(item => (
            <BookmarkItem item={item} dismissLinkItem={this.dismissBookmarkItem} key={item.id.toString()}/>
          ))}
        </div>
      </div>
    )
  }
}

class BookmarkItem extends Component {
  constructor(props){
    super(props)
    this.searchTag = this.searchTag.bind(this)
  }

  searchTag(event){
    event.preventDefault();
  }
  render(){
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
    const tags = this.props.item.tags
    console.log(typeof(tags), tags)
    const tagList=tags.map(tag => (<li className="list-inline-item"><a href="" onClick={this.searchTag} className="text-secondary">{tag}</a></li>))
    return(
      <div className="row my-4">
        <div className="col">
          <h6><a href={this.props.item.link} target="_blank">{this.props.item.title ? this.props.item.title : this.props.item.link} </a></h6>
          <div className="bookmark-link-description">{description()}</div>
          <div className="saved-link-tags"><ul className="list-inline">{tagList}</ul></div>
        </div>
      </div>
    )
  }
}

class Nav extends Component {
  constructor(props){
    super(props)
    this.handleNavChange = this.handleNavChange.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleNavChange(event){
    this.props.handleNavChange(event)
  }
  handleSignOut(){
    this.props.handleSignOut()
  }
  render(){
    return(
      <div className="navbar navbar-expand-lg fixed-top p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" role="navbar">
        <a id="brand" className="navbar-brand">Zipp</a>
          <div className="navbar-nav mr-auto">
              <a id="inbox" href ="" onClick={this.props.handleNavChange} className="nav-item nav-link">Inbox</a>
              <a id="bookmarks" href="" onClick={this.props.handleNavChange} className="nav-item nav-link">Bookmarks</a>
          </div>
          <div className="navbar-nav">
              <button className="btn btn-sm btn-outline-primary" type="button"  data-toggle="modal" data-target="#linkInputModal">Save</button>
              <a id="profile" href="" className="nav-item nav-link mr-auto" onClick={this.props.handleNavChange}>{this.props.currentUser}</a>
              <a id="signOut" href="" onClick={this.props.handleSignOut} className="nav-item nav-link mr-auto">sign out</a>
          </div>
      </div>
    )
  }
}

class Profile extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      {this.props.currentUser}
      <a href = "javascript:window.location='localhost:3000?u='+encodeURIComponent(document.location)">bookmarklet</a>
      </div>
    )
  }
}

class Bookmarklet extends Component{
  render(){
    var getSavedURL = () =>{
      var url = new URL(window.location.href)
      var savedUrl = url.searchParams.get('u')
      return savedUrl
    }
    return(
      <div>
        <div>{getSavedURL()}</div>
        <button className="btn btn-primary">Save</button>
      </div>
    )
  }
}


export default App;
