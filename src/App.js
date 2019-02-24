import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
// import '/' here
import axios from 'axios'
// import '/home' here
// import '/video/:video_id' here
// import '/search/:search_query' here
// import '/user' here
// import '/feededitor' here
// extra import here
// extra import here


const Placeholder = (props) => {
  return (
      <h1>This is the placeholder for our components</h1>
  );
}

class App extends Component {


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

        


      



   /* 
        Daniel's workspace
         */







  render() {
  //  const id = this.state.videoArray[0]
    return (
      <div>
        <h1>React Tube</h1>









        <Navbar />
        
        <Route path='/' exact component={Placeholder}/>
        <Route path='/home' exact component={Placeholder}/>
        <Route path='/video/:video_id' exact component={Placeholder}/>
        <Route path='/search/:search_query' exact component={Placeholder}/>
        <Route path='/user' exact component={Placeholder}/>
        <Route path='/feededitor' exact component={Placeholder}/>

        {/* <Route path='/user/:user_id/history' exact component={Placeholder}/> */}
        
        {/* 
        Pam's workspace
         */}

        {/* 
        Daniel's workspace
        
         */}

        {
          this.state.videoArray.map((e,i)=>{
            console.log('this is e', typeof e)
            const id = e
            return <div key={i}>{this.VideoPlayer({ id })}</div>


          })
        }







        {/*         
        Yun's workspace
         */}
        
        {/*         
        Rupa's workspace
          */}

      </div>
    );
  }
}

export default App;
