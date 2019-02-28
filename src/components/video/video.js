import React from 'react';
import { withRouter } from 'react-router-dom'
import { axiosSecondCall } from '../../services/axios'



class VideoPlayer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            videoData : {},
        }
        
    }
    
    players=( id )=>{
        const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`;
    
        return (
          <iframe title='yt-video' type="text/html" width="640" height="360"
        src={link} frameBorder="0"></iframe>
        )
        }
 
componentDidMount(){
    const id = this.props.id
    axiosSecondCall(id).then((response)=>{ 
        this.setState({
            videoData : response.data.items[0],
        })         
          console.log(response)
  
      })
}

render(){
    let e =  'rZbFKKpYApc' 
    console.log('props', this.props)
    console.log('nxtcall',this.state.videoData)
 
 
  
return <div>{
     this.players( this.props.id )
    //  Items: [
    //     {
    //     id,
    //     snippet.publishedAt,
    //     snippet.channelId,
    //     snippet.title,
    //     snippet.description,
    //     thumbnails.maxres.url,
    //     thumbnails.maxres.width,
    //     thumbnails.maxres.url.height,
    //     channelTitle,
    //     tags: [‘fiji’, ’best’…],
    //     statistics.viewCount,
    //     statistics.likeCount,
    //     statistics.dislikeCount,
    //     statistics.favoriteCount,
    //     statistics.commentCount,
    //     }
    // ]
 }
 
 { JSON.stringify(this.state.videoData.snippet) }
 { JSON.stringify(this.state.videoData.statistics) }


 </div>
  

}
}
    export default withRouter(VideoPlayer);