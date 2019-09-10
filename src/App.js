import React, { Component } from 'react'
import './App.css'
import Page from './components/Page.js'

class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       userValidated:false,
//       currentUser:'',
//       currentUserToken:'',
//       emailInput:'',
//       passwordInput:'',
//       savedLinkInput:'',
//       linkInputValid:false,
//       inboxItems:null,
//       inboxError:null,
//       inboxIsLoaded:false,
//       tagInput:'',
//       bookmarkedId:'',
//       bookmarkedURL:'',
//       bookmarkedTitle:'',
//       navigation:'inbox',
//     }
//     this.handleAuthChange = this.handleAuthChange.bind(this)
//     this.handleAuthSubmit = this.handleAuthSubmit.bind(this)
//     this.handleLinkInputChange = this.handleLinkInputChange.bind(this)
//     this.handleLinkSubmit = this.handleLinkSubmit.bind(this)
//     this.inboxDidMount = this.inboxDidMount.bind(this)
//     this.dismissLinkItem = this.dismissLinkItem.bind(this)
//     this.bookmarkLinkItem = this.bookmarkLinkItem.bind(this)
//     this.handleNavChange = this.handleNavChange.bind(this)
//     this.handleTagInputChange = this.handleTagInputChange.bind(this)
//     this.handleTagSubmit = this.handleTagSubmit.bind(this)
//     // this.loginWillMount = this.loginWillMount.bind(this)
//     // this.loginDidMount = this.loginDidMount.bind(this)
//     // this.googleDidAuth = this.googleDidAuth.bind(this)
//     this.handleSignOut = this.handleSignOut.bind(this)
//   }
//
//   handleNavChange(event){
//     event.preventDefault()
//     const value = event.target.id
//     this.setState({navigation:value})
//     console.log(this.state)
//   }
//
//   handleAuthChange (event) {
//     const name = event.target.name
//     const value = event.target.value
//     this.setState({[name]:value})
//     console.log(this.state)
//   }
//
//   handleAuthSubmit (event) {
//     event.preventDefault()
//     var p = {email:this.state.emailInput, password:this.state.passwordInput}
//     var postData = JSON.stringify(p)
//     var queryPath = apiBase+'authenticate'
//     console.log(typeof postData)
//     var resp = apiClient.apiRequest(queryPath,
//       {
//         method:"post",
//         body:postData,
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       })
//     if (resp) {
//       resp.then((r)=>{
//         this.setState({
//               userValidated: true,
//               currentUser: r.email,
//               currentUserToken: r.token,
//               passwordInput:'',
//               emailInput:''
//             })
//       })
//     }
//     console.log(resp)
//   }
//
//   handleLinkInputChange (event) {
//     console.log('saved link input set as: '+event.target.value)
//     this.setState({savedLinkInput: event.target.value}, function checkValidity(){
//       this.validateLinkInput()
//     })
//   }
//
//   handleLinkSubmit (event) {
//     event.preventDefault();
//     if(this.state.linkInputValid){
//       var p = {url:this.state.savedLinkInput}
//       var postData = JSON.stringify(p)
//       var token = this.state.currentUserToken
//       var user = this.state.currentUser
//       var queryPath = apiBase+"user/"+user+"/saved"
//       var resp = apiClient.apiRequest(queryPath, {method:"post", body:postData, headers:{'Authorization':token, 'Accept':'application/json', 'Content-Type': 'application/json'}})
//       console.log(resp)
//       if (resp){
//         resp.then((r)=>{
//             this.setState({
//               linkInputValid: false,
//               savedLinkInput:'',
//               showLinkInputModal:false,
//               inboxItems:[...this.state.inboxItems, r]
//             })
//             alert('link saved')
//           })
//       }
//     }
//     console.log(this.state)
//
//   }
//
//   handleTagInputChange (event) {
//     this.setState({tagInput:event.target.value})
//   }
//
//   handleTagSubmit (event) {
//     event.preventDefault();
//     const email = this.state.currentUser
//     const token = this.state.currentUserToken
//     const bookmarkId = this.state.bookmarkedId
//     var t = {'tags': this.state.tagInput}
//     const postData = JSON.stringify(t)
//     const queryPath =apiBase+'user/'+email+'/bookmarked/'+bookmarkId
//     var resp = apiClient.apiRequest(queryPath, {method:'post', body:postData, headers:{'Authorization':token, 'Content-Type':'application/json', 'Accept':'application/json'}})
//     if (resp){
//       resp.then((r)=>{
//         this.setState({bookmarkedId:null, tagInput:'', bookmarkedURL:null})
//       })
//     }
//   }
//
//   // loginDidMount () {
//   //   var self = this
//   //   if (process.browser) {
//   //     window.gapi.load('auth2', function() {
//   //       const auth2 = window.gapi.auth2.init({
//   //         client_id:'286746406943-p2lm1le00lkjdj57kidldjqjh4s8snci.apps.googleusercontent.com',
//   //       });
//   //       auth2.then(auth=>auth.isSignedIn.get())
//   //         .then((result)=>{
//   //           console.log(result)
//   //           if (result){
//   //             auth2.then(auth=>auth.currentUser.get())
//   //               .then((user)=>{
//   //                 console.log(user)
//   //                 if (user){
//   //                   self.googleDidAuth()
//   //                 }
//   //               })
//   //           } else {
//   //             auth2.then(auth=>auth.isSignedIn.listen(self.googleDidAuth))
//   //           }
//   //         })
//   //     })
//   //   }
//   // }
//
//   // googleDidAuth () {
//   //   var self=this
//   //   if (process.browser) {
//   //     const auth2 = window.gapi.auth2.getAuthInstance()
//   //     auth2.then(auth=>auth.currentUser.get())
//   //       .then((user)=>user.getAuthResponse())
//   //         .then((resp)=>{
//   //           self.verifyGoogleLogin(resp.id_token)
//   //         })
//   //       }
//   //   }
//
//   // verifyGoogleLogin (id_token) {
//   //   console.log(id_token)
//   //   const p = {'id_token':id_token}
//   //   console.log(p)
//   //   const postData = JSON.stringify(p)
//   //   const queryPath = apiBase+'googleoauth'
//   //   var resp = apiClient.apiRequest(queryPath, {method:'post', body:postData, headers:{'Accept':'application/json', 'Content-Type': 'application/json'}})
//   //   if (resp){
//   //     resp.then((r)=>{
//   //       console.log(r)
//   //       this.setState({
//   //             userValidated: true,
//   //             currentUser: r.email,
//   //             currentUserToken: r.token,
//   //             passwordInput:'',
//   //             emailInput:''
//   //           })
//   //     })
//   //   }
//   // }
//
//   handleSignOut(){
//     if (process.browser) {
//       var auth2 = window.gapi.auth2.getAuthInstance();
//        auth2.signOut().then(function () {
//        console.log('User signed out.');
//      });
//    }
//    this.setState({
//      userValidated:false,
//      currentUser:null,
//      currentUserToken:null,
//      passwordInput:'',
//      emailInput:''
//    })
//   }
//
//
//   dismissLinkItem (linkItem) {
//     var message = {'is_dismissed':true}
//     var postData = JSON.stringify(message)
//     var user = this.state.currentUser
//     console.log(postData, user)
//     const queryPath = apiBase+'user/'+user+'/saved/'+linkItem.id
//     var resp = apiClient.apiRequest(queryPath, { method:"post", body:postData, headers:{"Authorization": this.state.currentUserToken, 'Accept':'application/json', 'Content-Type': 'application/json'}})
//     if (resp){
//       resp.then((r)=>{
//         var items = this.state.inboxItems
//         var i = items.indexOf(linkItem)
//         items.splice(i,1)
//         this.setState({inboxItems:items})
//       })
//
//     }
//   }
//
//
//   bookmarkLinkItem (linkItem) {
//     this.setState({bookmarkedId:linkItem.id, bookmarkedURL:linkItem.link, bookmarkedTitle:linkItem.title})
//     var message = {'is_bookmarked':true}
//     var postData = JSON.stringify(message)
//     var user = this.state.currentUser
//     var queryPath= apiBase+'user/'+user+'/saved/'+linkItem.id
//     console.log(postData, user)
//     var resp = apiClient.apiRequest(queryPath, { method:"post", body:postData, headers:{"Authorization": this.state.currentUserToken, 'Accept':'application/json', 'Content-Type': 'application/json'}})
//     if (resp){
//       resp.then((r)=>{
//         var items = this.state.inboxItems
//         var i = items.indexOf(linkItem)
//         items.splice(i,1)
//         this.setState({inboxItems:items})
//         console.log(this.state)
//       })
//     }
//   }
//

  render () {
    return (
      <Page hideNav={true}>
        <div className="text-center landing">
          <h1>Zipp</h1>
          <div>Simple Bookmarking and read-it-later</div>
          <div className="row">
            <div className="col-4 text-center">
              Save links into your next up queue
            </div>
            <div className="col-4 text-center">
              bookmark and organize your links with tags
            </div>
            <div className="col-4 text-center">
              integrate into your workflow
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
export default App;
