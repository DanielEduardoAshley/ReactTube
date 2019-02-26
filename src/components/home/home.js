import  React, {  withRouter}  from 'react'
// import axios from 'axios'
import Homelayout from '../homelayout/homelayout'
import  axiosFirstCall  from '../../services/axios'




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
                        
                                    feedlist: ['music', 'orochimaru'],
                                    movieInfo: [
                                  //   {
                                  //  feedTitle: 'music',
                                  //  title : 'abba',
                                  //  description : 'new Album',
                                  //  thumbnail  : 'jpg',
                                  //  channelTitle : 'listeners',
                                  //  publishedAt : '4 hrs ago',
                                  //  nextPageToken: 'CAgQAA'
                                  //   }
                                   ]
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
    const newArr = []
   return axiosFirstCall('orochimaru').then((response)=>{
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
                    nextPageToken: e.nextPageToken,
  
  
            })
            
          })
            const addUserData = {...this.state}
            const Pamela = addUserData.Users.Pam.movieInfo
            const newPamela = (Pamela || []).concat(newArr)
            addUserData.Users.Pam.movieInfo = newPamela
            console.log(addUserData.Users)
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

  render(){
  return (
      <>
  <div>Home Page</div>
  <Homelayout active={this.state.Users[`${this.state.activeUser}`].movieInfo} vidsPage={this.vidPage}/>
  
  </>
  )
  
  
  
  }
  
  
  
  
  
  
}
export default Home;