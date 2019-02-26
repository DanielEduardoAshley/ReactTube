import React, { Component } from 'react';
import './components/homelayout/homelayout.css'
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';
import VideoPlayer from './components/video/video';
import Home from './components/home/home';
import User from './components/user/user';
import Feed from './components/feed/feed';

// extra import here
// extra import here

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
  
  
  render() {
  //  const id = this.state.videoArray[0]
    return (
      <div>
      <Navbar />
        
        <Route path='/home' exact component={Home}/>
        <Route path='/video/:video_id' render={()=><VideoPlayer id={'rZbFKKpYApc'}/>}/>
        <Route path='/search/:search' component={Search}/>
        <Route path='/user' component={User}/>
        <Route path='/feededitor' component={Feed}/>

        {/* <Route path='/user/:usesr_id/history' exact component={Placeholder}/> */}
        
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
