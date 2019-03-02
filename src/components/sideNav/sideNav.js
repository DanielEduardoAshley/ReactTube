import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SideNav extends Component {
  state = {
    input: '',
    feedlist: ["Naruto", "Itachi", "Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"],
    activeName: 'Default',
    routeName: 'Explore',
  }


  feedListDrop () {
    // const dropDowns = this.state.feedlist.map((v, i) => {
    //   return <p key={i} className='sideBarButton'>{v}</p>
    // })

    // return dropDowns;
  }


    render() {
      let title = ''
      const currentRouteArr = this.props.location.pathname.split('/');
      const currentRouteName = currentRouteArr[1];

      if(currentRouteName.toLowerCase() === 'feededitor'){
        title = 'Feed Editor'; 
      } else if(currentRouteName === '' || currentRouteName === 'home'){
        title = 'Explore';
      } else if (currentRouteName.toLowerCase() === 'search') {
        title = 'Search';
      } else if (currentRouteName.toLowerCase() === 'video') {
        title = 'Video';
      } else if (currentRouteName.toLowerCase() === 'live') {
        title = 'Live';
      }

      title = currentRouteName;
      
        return (
            <>  
          <div className='sideNavBar'>
            <h1 className='navTitle' style={{fontWeight:'bold', textTransform:'capitalize'}}>{title}</h1>
            <div className='navBarContainer'>
            {
              (this.state.activeName.toLowerCase() === 'default') ?
              null

              :
              <>
                <p className='navBarButton'>Feedlist</p>
                {/* {this.feedListDrop()} */}
                <p className='sideBarButton'>Feed 1</p>
                <p className='sideBarButton'>Feed 2</p>
                <p className='sideBarButton'>Feed 2</p>
              </>
            }

            {
              (title.toLowerCase() === 'live') ? 
              <div style={{width:'20px', height:'20px', marginLeft:'10px',marginTop:'190px',backgroundColor:'red', borderRadius:'100px'}}></div> 
              : null
            }
              
            </div>
          </div> 
            </>
        );
    }
}

export default withRouter(SideNav);