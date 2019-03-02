import React, { Component } from 'react';
import './components/homelayout/homelayout.css'
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';
import VideoPlayer from './components/video/video';
import Home from './components/home/home';
import User from './components/user/user';
import Feed from './components/feed/feed';
import ViewHistory from './components/viewHistory/viewHistory';
import SearchBar from './components/searchBar/searchBar';
import SideNav from './components/sideNav/sideNav';
import SplashPage from './components/splashpage/splashpage';

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
  console.log(this.props.location.pathname)
  const path = this.props.location.pathname
  const p= path.split('/')
  console.log(p[2])
  const id = p[2]

  // ROute for splash page
  // Route for app /home
    return (
      <>
<<<<<<< HEAD
 

{/* <Route path='/' exact component={SplashPage}/> */}

      
      
      {this.props.location.pathname === '/'? <Route path='/' exact component={SplashPage}/> :
<> <div style={{width:'90%', margin:'0 auto'}}>
        <div class='top-space'>
=======
      <div className='backgroundImg'>
      <div style={{width:'90%', margin:'0 auto'}}>
        <div className='top-space'>
>>>>>>> e0fe62ed00af5277848a8ed9590c445de08afaf4
          <div style={{display:'flex', flexWrap:'wrap', height:'42.594px'}}>
            <div className='navBar'></div>
            <div className='pageWindow'></div>
            <div className='sideNavBar'></div>
          </div>
        </div>
      </div><div className="App"><Navbar />
      
      <div className='pageWindow'>
          <SearchBar />
          <Route path='/home' exact component={Home}/>
          <Route path='/video/:video_id' render={()=><VideoPlayer id={id}/>}/>
          <Route path='/search/:search' component={Search}/>
          <Route path='/user' component={User}/>
          <Route path='/feededitor' component={Feed}/>
          <Route path='/user/:user_id/history' exact component={ViewHistory}/>
      </div>
      <SideNav />
      
      </div>
      
      </>
} 
     
     
      
<<<<<<< HEAD
=======
        <SideNav path={path}/>
               
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

>>>>>>> e0fe62ed00af5277848a8ed9590c445de08afaf4



      {/* <div style={{width:'90%', margin:'0 auto'}}>
        <div class='top-space'>
          <div style={{display:'flex', flexWrap:'wrap', height:'42.594px'}}>
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
          <Route path='/home' exact component={Home}/>
          <Route path='/video/:video_id' render={()=><VideoPlayer id={id}/>}/>
          <Route path='/search/:search' component={Search}/>
          <Route path='/user' component={User}/>
          <Route path='/feededitor' component={Feed}/>
          <Route path='/user/:user_id/history' exact component={ViewHistory}/>
      </div>
<<<<<<< HEAD
      <SideNav />
     
      </div> */}

=======
      </div>
>>>>>>> e0fe62ed00af5277848a8ed9590c445de08afaf4
      </>
    );
  }
}

export default withRouter(App);
