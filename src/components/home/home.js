import { React, Component } from 'react'
import axios from 'axios'



class Home extends  Component {
    constructor(props){
        super(props)
        this.state={


        }
    }
    VideoPlayer = ({ id }) => {
        const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3001`;
      
        return (
          <iframe title='yt-video' type="text/html" width="640" height="360"
        src={link} frameBorder="0"></iframe>
        )
        }



componentDidMount(){
   return axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          maxResults: 8,
          videoDefinition: 'high',
          type: 'video',
          videoEmbeddable: 'true',
          key: 'AIzaSyDk4Baz4ZsCIIY-zwzjEgOATbmVwjZVVpc',
          q: 'orochimaru',
          pageToken: ''
        }
      })
      .then(response=>{
            console.log(response)

      })


}


render(){

return (
<div>Home Page</div>


)



}





}

export default Home