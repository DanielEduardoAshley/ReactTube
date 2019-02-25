import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
// import '/' here
import axios from 'axios'
// import '/home' here
// import '/video/:video_id' here
import Search from './components/search/search';
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
  
  
  render() {
  //  const id = this.state.videoArray[0]
    return (
      <div>
        <h1>React Tube</h1>


 <Navbar />
        
        <Route path='/' exact component={Placeholder}/>
        <Route path='/video/:video_id' component={Placeholder}/>
        <Route path='/search/:search' component={Search}/>
        <Route path='/user' component={Placeholder}/>
        <Route path='/feededitor' component={Placeholder}/>

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
