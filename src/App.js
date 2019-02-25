import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
// import '/' here
// import '/home' here
// import '/video/:video_id' here
// import '/search/:search_query' here
import User from './components/user/user';
import Feed from './components/feed/feed';
// extra import here
// extra import here


const Placeholder = (props) => {
  return (
      <h1>This is the placeholder for our components</h1>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Tube</h1>

        <Navbar />
        
        <Route path='/' exact component={Placeholder}/>
        <Route path='/home' exact component={Placeholder}/>
        <Route path='/video/:video_id' exact component={Placeholder}/>
        <Route path='/search/:search_query' exact component={Placeholder}/>
        <Route path='/user' exact component={User}/>
        <Route path='/feededitor' exact component={Feed}/>

        {/* <Route path='/user/:usesr_id/history' exact component={Placeholder}/> */}
        
        {/* 
        Pam's workspace
         */}

        {/* 
        Daniel's workspace
         */}

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
