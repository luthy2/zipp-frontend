class ApiClient{
  constructor(){
    this.apiBase =  function(){
      if (window.location.host === 'localhost:3000'){
        return 'http://localhost:5000/api/'
      }else{
        return 'https://zipp-api.herokuapp.com/api/'
      }
    }
  }

  apiRequest(path, options){
    var base = this.apiBase()
    return fetch(base+path, options)
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
