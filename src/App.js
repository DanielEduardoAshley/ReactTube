import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

const Placeholder = (props) => {
  return (
      <h1>This is the placeholder for our components</h1>
  );
}

class App extends Component {
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
      response.data.items.map(e=>{
        return this.setState({
          videoArray : (this.videoArray || []).concat(e.id.videoId) 
        })
      })
      console.log( this.state.videoArray)
  
      
        
      
    })
  }







  render() {
    return (
      <div>
        <h1>React Tube</h1>
{/* ////////Daniel's Stuff */}









        <Navbar />
        
        <Route path='/' exact component={Placeholder}/>
        <Route path='/home' exact component={Placeholder}/>
        <Route path='/video/:video_id' exact component={Placeholder}/>
        <Route path='/search/:search_query' exact component={Placeholder}/>
        <Route path='/user' exact component={Placeholder}/>
        <Route path='/feededitor' exact component={Placeholder}/>

        {/* <Route path='/user/:user_id/history' exact component={Placeholder}/> */}
      </div>
    );
  }
}

export default App;
