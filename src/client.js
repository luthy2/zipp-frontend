class ApiClient{

  static apiRequest(path, options){
    return fetch(path, options)
      .then(res=>res.json())
      .then(
        (result)=>{
          return result
        },
        (error)=>{
          console.log(error)
          return error
        }
      )
  }
}

// var devClient = new ApiClient('localhost')
// var prodClient = new ApiClient('production')
export default ApiClient;
