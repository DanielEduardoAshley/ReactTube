import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideNav extends Component {
  state = {
    input: '',
    feedlist: ["Naruto", "Itachi", "Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"],
    activeName: 'Default',
    routeName: 'Explore',
  }

  componentDidMount () {

  }

  componentDidUpdate (prevProps) {
    if (this.props.path.toLowerCase() !== prevProps.path) {
      
      const currentRouteArr = this.props.path.split('/');
      const currentRouteName = currentRouteArr[1];
      console.log('This is the current route',currentRouteName)

      if(currentRouteName.toLowerCase() === 'feededitor'){
        this.setState({routeName: 'Feed Editor'}) 
      } else if(currentRouteName === '' || currentRouteName === 'home'){
        this.setState({routeName: 'Explore'}) 
      } else if (currentRouteName.toLowerCase() === 'search') {
        this.setState({routeName: "Search"})
      }
      else if (currentRouteName.toLowerCase() === 'video') {
        // this.setState({routeName: ""})
      }
    }
  }

  feedListDrop () {
    // const dropDowns = this.state.feedlist.map((v, i) => {
    //   return <p key={i} className='sideBarButton'>{v}</p>
    // })

    // return dropDowns;
  }

    render() {
        return (
            <>  
          <div className='sideNavBar'>
            <h1 className='navTitle' style={{fontWeight:'bold', textTransform:'capitalize'}}>{this.state.routeName}</h1>
            <div className='navBarContainer'>
            {
              (this.state.activeName.toLowerCase() === 'default') ?
              <p></p>

              :
              <>
                <p className='navBarButton'>Feedlist</p>
                {/* {this.feedListDrop()} */}
                <p className='sideBarButton'>Feed 1</p>
                <p className='sideBarButton'>Feed 2</p>
                <p className='sideBarButton'>Feed 2</p>
              </>
            }
              
            </div>
          </div> 
            </>
        );
    }
}

export default withRouter(SideNav);