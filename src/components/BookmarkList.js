import React, {Component} from 'react'

class BookmarkList extends Component {
  constructor(props){
    super(props)
  }

  // componentWillMount () {
  //   const currentUser = this.props.currentUser
  //   const token = this.props.currentUserToken
  //   const queryPath = apiBase+'user/'+currentUser+'/bookmarked'
  //   var resp = apiClient.apiRequest(queryPath, {headers:{'Authorization':token}})
  //   if (resp){
  //     resp.then((r)=>{
  //       this.setState({items:r})
  //       console.log(this.state)
  //     })
  //   }
  // }

  render () {
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

export default BookmarkList
