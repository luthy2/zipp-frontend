import React, {Component} from 'react'

class BookmarkItem extends Component {
  constructor(props){
    super(props)
    this.searchTag = this.searchTag.bind(this)
  }

  searchTag (event) {
    event.preventDefault();
  }

  render () {
  let description = () => {
      if (this.props.item.description){
        let s = this.props.item.description.split(' ')
        if (s.length > 25) {
          let d = s.slice(0,25).concat('...').join(' ')
          return d
        } else {
          return this.props.item.description
        }
      } else {
        return "No Description Available"
      }
    }
    const tags = this.props.item.tags
    const tagList=tags.map(tag => (
      <li className="list-inline-item"><a href="" onClick={this.searchTag} className="text-secondary">{tag}</a></li>
      )
    )
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

export default BookmarkItem
