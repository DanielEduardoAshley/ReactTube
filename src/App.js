import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

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
        <Route path='/user' exact component={Placeholder}/>
        <Route path='/feededitor' exact component={Placeholder}/>

        {/* <Route path='/user/:user_id/history' exact component={Placeholder}/> */}
      </div>
    );
  }
}

export default App;
