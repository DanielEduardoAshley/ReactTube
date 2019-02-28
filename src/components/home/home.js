import  React from 'react'
import {  withRouter } from 'react-router-dom';

// import axios from 'axios'
import Homelayout from '../homelayout/homelayout'
import  { axiosFirstCall, axiosSecondCall }  from '../../services/axios'
import VideoPlayer from '../video/video';




class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
                Users : {
                       Default : {
                                
                                feedlist: ['music', 'orochimaru'],
                                movieInfo: [
                                  {
                                   feedTitle: 'music',
                                   vidTitle : 'abba',
                                   vidInfo : 'new Album',
                                   vidImg  : 'jpg',
                                   chanName : 'listeners',
                                   TimePost : '4 hrs ago'
                                  }
                                 ]
                    },         
                       
                       Pam  :  { 
                        
                                    feedlist: [ 'orochimaru'],
                                    movieInfo: {}
                                  //   {
                                  //  feedTitle: 'music',
                                  //  title : 'abba',
                                  //  description : 'new Album',
                                  //  thumbnail  : 'jpg',
                                  //  channelTitle : 'listeners',
                                  //  publishedAt : '4 hrs ago',
                                  //  nextPageToken: 'CAgQAA'
                                  //   }
                                  // this.state.users[selectedUser].movieInfo[feedName].map()
                                    
                    }
                  },
                        
                activeUser : 'Pam',
                showMore : {
                                titleOfFeed : 'music',
                                showMore    :  false
                            }
        }
    }
  
  componentDidMount(){
    console.log('hello')
    const newArr = []
    const newObj = {}
    const addUserData = {...this.state}

    const query = 'orochimaru'
    const nextPage =  ''
   return axiosFirstCall(query, nextPage).then((response)=>{
     console.log('data',response)
          response.data.items.map(e=>{
            
            return newArr.push({
              feedTitle : 'orochimaru',
              id: e.id.videoId,
              title  : e.snippet.title,
              description: e.snippet.description,
              thumbnail: e.snippet.thumbnails.default,
              channelTitle: e.snippet.channelTitle,
              publishedAt : e.snippet.publishedAt,
              nextPageToken: response.data.nextPageToken,


      }
            )
            
          })
            
            const addUserData = {...this.state}
            const Pamela = addUserData.Users[`${this.state.activeUser}`].movieInfo
             Pamela[query] = newArr
            // const newPamela = (Pamela || []).concat(newArr)
            // addUserData.Users.Pam.movieInfo = newPamela 
            console.log('this',addUserData.Users)
          this.setState({
            Users : addUserData.Users
          },()=>{
            console.log(this.state.Users)
            console.log(this.state.Users[`${this.state.activeUser}`].movieInfo)
  
  
          })
  
  
  
   })
  
  
  }
  
  
 vidPage=(id)=>{
    console.log(id)
    console.log(this.props)
    this.props.history.push(`video/${id}`)
    


 }

 loadmore=(feedTitle)=>{
    const newArr = []
    const newObj = {}
    const query = feedTitle
    const addUserData = {...this.state}
    const nextPageToken = addUserData.Users[`${this.state.activeUser}`].movieInfo[query][addUserData.Users[`${this.state.activeUser}`].movieInfo[query].length-1].nextPageToken
    console.log('get',nextPageToken)
    return axiosFirstCall(query, nextPageToken).then((response)=>{
     console.log('data',response)
          response.data.items.map(e=>{
            
            return newArr.push({
              feedTitle : 'orochimaru',
              id: e.id.videoId,
              title  : e.snippet.title,
              description: e.snippet.description,
              thumbnail: e.snippet.thumbnails.default,
              channelTitle: e.snippet.channelTitle,
              publishedAt : e.snippet.publishedAt,
              nextPageToken: response.data.nextPageToken,


      }
            )
            
          })
            
            const addUserData = {...this.state}
            const Pamela = addUserData.Users[`${this.state.activeUser}`].movieInfo
             Pamela[query] = Pamela[query].concat(newArr)
            // const newPamela = (Pamela || []).concat(newArr)
            // addUserData.Users.Pam.movieInfo = newPamela 
            console.log('this',addUserData.Users)
          this.setState({
            Users : addUserData.Users
          },()=>{
            console.log(this.state.Users)
            console.log(this.state.Users[`${this.state.activeUser}`].movieInfo)
  
  
          })
  
  
  
   })
 }

  render(){
    console.log('these', this.props)
  return (
      <>
    {/* <div className="searchBox">
                <input placeholder='Search' className='navInput' onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
                <button className="searchButton" onClick={(e)=>this.onClick(e)}>Search</button>
            </div> */}
  <div>Home Page</div>
  <Homelayout active={this.state.Users[`${this.state.activeUser}`].movieInfo} feedList={this.state.Users[`${this.state.activeUser}`].feedlist} vidsPage={this.vidPage} loadmore={this.loadmore}/>
  </>
  )
  
  
  
  }
  
  
  
  
  
  
}
export default Home ;