import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      showTagModal:false,
      tagInput:'',
      bookmarkedId:'',
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
    this.loginWillMount = this.loginWillMount.bind(this)
    this.googleDidAuth = this.googleDidAuth.bind(this)
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
    var p = {email:this.state.emailInput, password:this.state.passwordInput}
    var postData = JSON.stringify(p)
    console.log(typeof postData)
    fetch("http://localhost:5000/api/authenticate", {method:"post", body:postData, headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
      .then(res=>res.json())
      .then(
        (result) => {
          this.setState({
            userValidated: true,
            currentUser: result.email,
            currentUserToken: result.token,
            passwordInput:'',
            emailInput:''
          });
          console.log(this.state)
        },
        (error) => {
          this.setState({
            userValidated:false,
            error
          });
        }
      )
    event.preventDefault()
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
    console.log(this.state)
    if(this.state.linkInputValid){
      var p = {url:this.state.savedLinkInput}
      var postData = JSON.stringify(p)
      var token = this.state.currentUserToken
      var query = this.state.currentUser
      fetch("http://localhost:5000/api/user/"+query+"/saved", {method:"post", body:postData, headers:{'Authorization':token, 'Accept':'application/json', 'Content-Type': 'application/json'}})
        .then(res=>res.json())
        .then(
          (result) => {
            this.setState({
              linkInputValid: false,
              savedLinkInput:'',
              inboxItems:[...this.state.inboxItems, result]
            });
            console.log(result)
            alert('link saved')
          },
          (error) => {
            this.setState({
              linkInputValid:false,
              error
            });
            alert('failed to save link')
          }
        )
      this.setState({savedLinkInput:'', linkInputValid:false})
    }
    console.log(this.state)
    event.preventDefault();
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
    fetch('http://localhost:5000/api/user/'+email+'/bookmarked/'+bookmarkId, {method:'post', body:postData, headers:{'Authorization':token, 'Content-Type':'application/json', 'Accept':'application/json'}})
      .then(res=>res.json())
        .then(
          (result) => {
            this.setState({showTagModal:false, bookmarkedId:null, tagInput:''})
            console.log(result)
          },
          (error) => {
            this.setState({
              error
            });
            alert('failed to save link')
          }
        )
  }
  loginWillMount(){
    var self = this
    window.gapi.load('auth2', function() {
      const auth2 = window.gapi.auth2.init({
        client_id:'286746406943-p2lm1le00lkjdj57kidldjqjh4s8snci.apps.googleusercontent.com',
      });
      auth2.then(auth=>auth.isSignedIn.get())
        .then((result)=>{
          if (result){
            auth2.then(auth=>auth.currentUser.get())
              .then((user)=>{
                console.log(user)
                self.googleDidAuth(user)
              })
          } else {
            auth2.then(auth=>auth.isSignedIn.listen(self.googleDidAuth))
          }
        })

    })
  }
  googleDidAuth(googleUser){
    const user = googleUser.getAuthResponse(true)
    const p = {'id_token':user.id_token}
    const postData = JSON.stringify(p)
    fetch('http://localhost:8000/api/googleoauth', {method:'post', body:postData, headers:{'Accept':'application/json', 'Content-Type': 'application/json'}})
      .then(res=>res.json())
      .then(
        (result)=>{
          this.setState({
            userValidated: true,
            currentUser: result.email,
            currentUserToken: result.token,
            passwordInput:'',
            emailInput:''
          })
        },
        (error)=>{
          console.log(error)
        }
    )
  }
  inboxDidMount(){
    const currentUser = this.state.currentUser
    const token = this.state.currentUserToken
    fetch("http://localhost:5000/api/user/"+currentUser+"/saved", { headers:{'Authorization':token}})
      .then(res=>res.json())
      .then(
        (result) => {
          this.setState({
            inboxIsLoaded: true,
            inboxItems:result
          });
          console.log(result)
          console.log(this.state)
        },
        (error) => {
          this.setState({
            isLoaded:true,
            error
          });
          console.log(error)
        }
      )
  }
  dismissLinkItem(linkItem){
    var message = {'is_dismissed':true}
    var postData = JSON.stringify(message)
    var user = this.state.currentUser
    console.log(postData, user)
    fetch('http://localhost:5000/api/user/'+user+'/saved/'+linkItem.id, { method:"post", body:postData, headers:{"Authorization": this.state.currentUserToken, 'Accept':'application/json', 'Content-Type': 'application/json'}})
      .then(res=>res.json())
      .then(
        (result)=>{
          var items = this.state.inboxItems
          var i = items.indexOf(linkItem)
          items.splice(i,1)
          this.setState({inboxItems:items})
          console.log(this.state)
        },
        (error)=>{
          console.log(error)
        }
      )
  }
  bookmarkLinkItem(linkItem){
    var message = {'is_bookmarked':true}
    var postData = JSON.stringify(message)
    var user = this.state.currentUser
    console.log(postData, user)
    fetch('http://localhost:5000/api/user/'+user+'/saved/'+linkItem.id, { method:"post", body:postData, headers:{"Authorization": this.state.currentUserToken, 'Accept':'application/json', 'Content-Type': 'application/json'}})
      .then(res=>res.json())
      .then(
        (result)=>{
          var items = this.state.inboxItems
          var i = items.indexOf(linkItem)
          items.splice(i,1)
          this.setState({inboxItems:items, showTagModal:true, bookmarkedId:linkItem.id})
          console.log(this.state)
        },
        (error)=>{
          console.log(error)
        }
      )
  }
  render() {
    const nav = this.state.navigation
    var page = null
    if (nav=="inbox"){
      page = <LinkList currentUser={this.state.currentUser} currentUserToken={this.state.currentUserToken} inboxItems = {this.state.inboxItems} componentDidMount={this.inboxDidMount} inboxIsLoaded={this.state.inboxIsLoaded} inboxError={this.props.inboxError} dismissLinkItem={this.dismissLinkItem} bookmarkLinkItem={this.bookmarkLinkItem}/>
    } else if (nav=="bookmarks"){
      page = <BookmarkList currentUserToken={this.state.currentUserToken} currentUser={this.state.currentUser}/>
    }
    if (this.state.userValidated){
      return (
        <div>
          <Nav handleNavChange={this.handleNavChange}/>
          <Header user={this.state.currentUser}/>
          <BookmarkTagForm
            showTagModal={this.state.showTagModal}
            handleTagSubmit={this.handleTagSubmit}
            handleTagInputChange={this.handleTagInputChange}
            tagInput = {this.state.tagInput}
          />
          <LinkInput
            currentUser={this.state.currentUser}
            currentUserToken={this.state.currentUserToken}
            handleLinkInputChange={this.handleLinkInputChange}
            handleLinkSubmit={this.handleLinkSubmit}
            validateLinkInput={this.validateLinkInput}
            savedLinkInput={this.state.savedLinkInput}
            linkInputValid={this.state.linkInputValid}
            />
          {page}
        </div>
      )
    } else {
      return(
        <LoginForm emailInput={this.state.emailInput} passwordInput={this.state.passwordInput} onInputChange={this.handleAuthChange} onSubmitAuth={this.handleAuthSubmit}
        loginWillMount={this.loginWillMount}/>
      )
    }
  }
}

class Header extends Component {
  render() {
    return (
      <h4 className="greeting">{this.props.user} reading list</h4>
    )
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
      return <div>Loading...</div>
    } else {
      return  (
        <div className="inbox-main">
          <ul className="inbox-link-list">
            {items.map(item => (
              <LinkItem  item={item} dismissLinkItem={this.dismissLinkItem} bookmarkLinkItem={this.bookmarkLinkItem} key={item.id.toString()} token={this.props.currentUserToken} currentUser={this.props.currentUser}/>
            ))}
          </ul>
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
    console.log(postData, user)
    fetch('http://localhost:5000/api/user/'+user+'/saved/'+linkId, { method:"post", body:postData, headers:{"Authorization": this.props.token, 'Accept':'application/json', 'Content-Type': 'application/json'}})
      .then(res=>res.json())
      .then(
        (result)=>{
          this.setState({isPublic:privacy})
          console.log(this.state)
        },
        (error)=>{
          console.log(error)
        }
      )
  }
  render(){
    return(
      <li className="inbox-link-item">
        <div>
          <a href={this.props.item.link} target="_blank">{this.props.item.title ? this.props.item.title : this.props.item.link} </a>
          <div className="inbox-link-description">{this.props.item.description ? this.props.item.description : 'No Description Available' }</div>
          <div>
            <input className="link-action-button" type="button" value="bookmark" onClick={this.bookmarkLinkItem}/><input className="link-action-button" type="button" value="dismiss" onClick={this.dismissLinkItem}/>
            <label>public
              <input type="checkbox" checked={this.state.isPublic} name={this.props.item.id} onChange={this.toggleLinkPrivacy} />
            </label>
          </div>
        </div>
      </li>
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
    if (this.props.showTagModal){
      return(
        <div className="modal">
          <form onSubmit={this.props.handleTagSubmit} className="modal-content">
            <label> Add Tags
              <input type="text" value={this.props.tagInput} id={this.props.linkId} onChange={this.props.handleTagInputChange} />
            </label>
            <input type="submit" value="Save Tags"/>
          </form>
        </div>
      )
    }else{
      return(null)
    }
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
      <div className="link-input-container">
        <form onSubmit={this.handleLinkSubmit}>
          <label> Save a Link
            <div>
              <input
                type="text"
                name="savedLink"
                value={this.props.savedLinkInput}
                placeholder="https://..." className="input-default" onInput={this.props.handleLinkInputChange}
                />
            </div>
          </label>
          <input type="submit" value="Save" className="button-default"/>
        </form>
      </div>
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

  componentWillMount(){
    this.props.loginWillMount()
  }

  render(){
    return(
      <div className="login-container">
      Login
        <form onSubmit={this.handleSubmit}>
          <label> email
          <div>
            <input type="text" name= "emailInput" value={this.props.emailInput} onChange={this.handleChange} className="input-default"/>
            </div>
          </label>
          <label> Password
          <div>
            <input type="password" name= "passwordInput" value={this.state.passwordInput} onChange={this.handleChange} className="input-default"/>
            </div>
          </label>
          <input type="submit" value="Login" className="input-default"/>
        </form>
        <div class="g-signin2"></div>
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
    fetch('http://localhost:5000/api/user/'+currentUser+'/bookmarked', {headers:{'Authorization':token}})
      .then(res=>res.json())
      .then(
        (result)=>{
          this.setState({items:result})
          console.log(result)
        },
        (error)=>{
          console.log(error)
        }
      )
  }
  render(){

    return(
      <div className="inbox-main">
        <ul className="bookmark-link-list">
          {this.state.items.map(item => (
            <BookmarkItem item={item} dismissLinkItem={this.dismissBookmarkItem} key={item.id.toString()}/>
          ))}
        </ul>
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
    const tags = this.props.item.tags
    console.log(typeof(tags), tags)
    const tagList=tags.map(tag => (<a href="" onClick={this.searchTag} className="tag-item">{tag}</a>))
    return(
      <li className="bookmark-link-item">
        <div>
          <a href={this.props.item.link} target="_blank">{this.props.item.title ? this.props.item.title : this.props.item.link} </a>
          <div className="bookmark-link-description">{this.props.item.description ? this.props.item.description : 'No Description Available' }</div>
          <div className="saved-link-tags">{tagList}</div>
        </div>
      </li>
    )
  }
}

class Nav extends Component {
  constructor(props){
    super(props)
    this.handleNavChange = this.handleNavChange.bind(this)
  }

  handleNavChange(event){
    this.props.handleNavChange(event)
  }
  render(){
    return(
      <div className="navigation-bar">
        <a id="inbox" href ="" onClick={this.props.handleNavChange} className="navigation">Inbox</a>
        <a id="bookmarks" href="" onClick={this.props.handleNavChange} className="navigation">Bookmarks</a>
      </div>
    )
  }
}



export default App;
