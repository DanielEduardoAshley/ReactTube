import { React, Component } from 'react'
import axios from 'axios'



class Home extends  Component {
    constructor(props){
        super(props)
        this.state={


        }
    }
// componentDidMount(){
//    return axios({
//         method: 'get',
//         url: 'https://www.googleapis.com/youtube/v3/search',
//         params: {
//           part: 'snippet',
//           maxResults: 8,
//           videoDefinition: 'high',
//           type: 'video',
//           videoEmbeddable: 'true',
//           key: 'AIzaSyDk4Baz4ZsCIIY-zwzjEgOATbmVwjZVVpc',
//           q: 'orochimaru',
//           pageToken: ''
//         }
//       })
//       .then(response=>{
//             console.log(response)

//       })


// }


render(){

return (
<div>Home Page</div>


)



}





}

export default Home