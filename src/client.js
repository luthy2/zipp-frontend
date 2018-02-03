class ApiClient{
  constructor(apiBase){
    this.apiBase = apiBase
  }

  apiGet(path, options){
    fetch(this.apiBase+path, options)
      .then(res=>res.json())
      .then(
        (result)=>{
          return result
        },
        (error)=>{
          return error
        }
      )
  }
  apiPost(path, options){
    fetch(this.apiBase+path, options)
      .then(res=>res.json())
      then(
        (result)=>{
          return result
        },
        (error)=>{
          return error
        }
      )
  }
}

// var devClient = new ApiClient('localhost')
// var prodClient = new ApiClient('production')
