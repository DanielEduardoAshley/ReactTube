import { React, Component } from 'react'
import axios from 'axios'



class Home extends Component {


    /* 
         Daniel's workspace
          */
   constructor(props){
     super(props)
     this.state={
       videoArray : []
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
     axios({
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
     }).then(response=>{
       console.log(response)
       return response.data.items.map(e=>{
         console.log(e.id.videoId)
 
        return  this.setState({
           videoArray : (this.state.videoArray || []).concat([e.id.videoId]) 
         })
       })
   
       
         
       
     })
     .then(()=>{
      const arr = []
     console.log(this.state.videoArray)
      this.state.videoArray.map((e)=>{
       return axios({
         method: 'get',
         url: 'https://www.googleapis.com/youtube/v3/videos',
         params: {
           part: 'id,snippet,statistics',
           key: 'AIzaSyDk4Baz4ZsCIIY-zwzjEgOATbmVwjZVVpc',
           id: e,
         }
       }).then((response)=>{
         arr.push(
           
           response.data.items[0].id)
            
               // obj.response.data.items[0].id
           // snippet.publishedAt,
           // snippet.channelId,
           // snippet.title,
           // snippet.description,
           // thumbnails.maxres.url,
           // thumbnails.maxres.width,
           // thumbnails.maxres.url.height,
           // channelTitle,
           // tags,
           // statistics.viewCount,
           // statistics.likeCount,
           // statistics.dislikeCount,
           // statistics.favoriteCount,
           // statistics.commentCount,
       
         console.log(arr)
 
       })
       
       
     })
     })
        
             
 
       }
    }
<<<<<<< master
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
=======
>>>>>>> local

export default Home