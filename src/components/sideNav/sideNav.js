import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <>  
          <div className='sideNavBar'>
            <h1 className='navTitle' style={{fontWeight:'bold'}}>Explore</h1>
            <div className='navBarContainer'>
              <p className='navBarButton'>Feedlist</p>
              <p className='sideBarButton'>Feed 1</p>
              <p className='sideBarButton'>Feed 2</p>
              <p className='sideBarButton'>Feed 2</p>
            </div>
          </div> 
            </>
        );
    }
}

export default withRouter(SideNav);