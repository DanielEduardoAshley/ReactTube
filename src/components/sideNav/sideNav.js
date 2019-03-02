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
    const activeUserLS = JSON.parse(localStorage.getItem('activeUser')) || {
      name: 'Default',
      feedList: ["Naruto", "Itachi", "Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"]
    }

    // this.setState({activeName: activeUserLS.name, feedlist: activeUserLS.feedList })
    // const routeNameLS = localStorage.getItem('routeName')
    // console.log('Side nav',this.props)
    // console.log('here in side NAV:', routeNameLS)
    // console.log('In the side Nav',this.props)
    // console.log('This is location',this.props.location.pathname)
    // console.log('This is match info object',this.props.match.params)
    // console.log('This is location',this.props.location.pathname)
    // this.setState({routeName: routeNameLS})
  }

  componentDidUpdate (prevProps) {
    console.log('this is props', this.props.path)
    if (this.props.path.toLowerCase() !== prevProps.path) {
      
      const currentRouteArr = this.props.path.split('/');
      const currentRouteName = currentRouteArr[1];

      if(currentRouteName === '' || currentRouteName === 'home'){
        this.setState({routeName: 'Explore'})
      } else {
        this.setState({routeName: currentRouteName})
      }
    }
    // const activeUserLS = JSON.parse(localStorage.getItem('activeUser')) || {
    //   name: 'Default',
    //   feedList: ["Naruto", "Itachi", "Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"]
    // }
    // if (this.state.activeName.toLowerCase() === 'default') {
    //   this.setState({activeName: activeUserLS.name, feedlist: activeUserLS.feedList})
    // }
  }

  feedListDrop () {
    const dropDowns = this.state.feedlist.map((v, i) => {
      return <p key={i} className='sideBarButton'>{v}</p>
    })

    return dropDowns;
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
                {this.feedListDrop()}
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