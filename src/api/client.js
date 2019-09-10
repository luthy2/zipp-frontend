import axios from 'axios'

class ApiClient {

  constructor () {
    this.apiBase = () => {
      // t
      if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:5000/api/'
      } else {
        return 'https://zipp-api.herokuapp.com/api/'
      }
    }
  }

  postBody (data) {
    let postData = JSON.stringify(data)
    return {
      method: "post",
      body: postData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  }

  apiRequest (path, options) {
    let base = this.apiBase()
    return fetch(base+path, options)
      .then(res => {
        if (res.ok) {
          res.json()
        }
      }).then((result) => {
        return result
      }).catch(e => {
        return null
      })
  }

  login (email, password) {
    let auth = {"email": email, "password": password}
    let url = `${this.apiBase()}authenticate`
    return axios({
      method: 'post',
      url: url,
      data: auth
    })
  }

  validateToken (token) {
    let url = `${this.apiBase()}validate`
    return axios({
      method: 'post',
      url: url,
      headers: {
        Authorization: token
      }
    })
  }

  register (email, password) {
    let auth = {"email": email, "password": password}
    let url = `${this.apiBase()}register`
    return axios({
      method: 'post',
      url: url,
      data: auth
    })
  }

  getSavedLinks (user, token) {
    let url = `${this.apiBase()}user/${user}/saved`
    return axios({
      url: url,
      headers: {
        'Authorization': token
      }
    })
  }

  getBookmarks (user, token) {
    let url = `${this.apiBase()}user/${user}/bookmarked`
    return axios({
      url: url,
      headers: {
        'Authorization': token
      }
    })
  }

  saveLink (user, token, link) {
    let url = `${this.apiBase}user/${user}/saved`
    return axios({
      method: 'post',
      url: url,
      data: data,
      headers: {
        "Authorization": token
      }
    })
  }
}

// var devClient = new ApiClient('localhost')
// var prodClient = new ApiClient('production')
export default ApiClient;
