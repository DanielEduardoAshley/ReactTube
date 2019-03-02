import React, { Component } from 'react';
import './components/homelayout/homelayout.css'
import { Route, withRouter, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';
import VideoPlayer from './components/video/video';
import Home from './components/home/home';
import User from './components/user/user';
import Feed from './components/feed/feed';
import ViewHistory from './components/viewHistory/viewHistory';
import SearchBar from './components/searchBar/searchBar';
import SideNav from './components/sideNav/sideNav';
import NotFound from './components/notfound/notfound';

// extra import here
// extra import here

class App extends Component {

  /* 
       Daniel's workspace
        */
  constructor(props) {
    super(props)
    this.state = {
      videoArray: []
    }
  }


  render() {

    const path = this.props.location.pathname
    const p = path.split('/')
    
    const id = p[2]
    return (
      
      <>
        <div className='backgroundImg'>
          <div style={{ width: '90%', margin: '0 auto' }}>
            <div className='top-space'>
              <div style={{ display: 'flex', flexWrap: 'wrap', height: '42.594px' }}>
                <div className='navBar'></div>
                <div className='pageWindow'></div>
                <div className='sideNavBar'></div>
              </div>
            </div>
          </div>

          
          <div className="App">
            <Navbar />

            <div className='pageWindow'>
              <SearchBar />
              <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' exact component={Home} />
              <Route path='/video/:video_id' exact render={() => <VideoPlayer id={id} />} />
              <Route path='/search/:search' exact component={Search} />
              <Route path='/user' exact component={User} />
              <Route path='/feededitor' exact component={Feed} />
              <Route path='/user/:user_id/history' exact component={ViewHistory} />
              <Route component={NotFound} />
              </Switch>
            </div>

            <SideNav path={path} />
            
            {/* 
        Pam's workspace
         */}

            {/* 
        Daniel's workspace
        
         */}

            {
              this.state.videoArray.map((e, i) => {
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
        </div>
      </>
    );
  }
}

export default withRouter(App);
