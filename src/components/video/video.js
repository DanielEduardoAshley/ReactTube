import React from 'react';
import { withRouter } from 'react-router-dom';
import { axiosSecondCall } from '../../services/axios';
import Moment from 'moment';
import './video.css';

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
        const data = response.data.items[0];
        const {snippet, statistics} = data;
        
        const {publishedAt, channelTitle, title, description} = snippet;
        const {commentCount, dislikeCount, likeCount, viewCount} = statistics;
        const date = Moment(`${publishedAt}`, "YYYYMMDD").fromNow();
        const videoObj = { 
            date, 
            channelTitle, 
            title, 
            description, 
            commentCount, 
            dislikeCount, 
            likeCount, 
            viewCount
        }

        this.setState({videoData : videoObj}) 
        
      })
}

render(){
    const { 
        date, 
        channelTitle, 
        title, 
        description, 
        commentCount, 
        dislikeCount, 
        likeCount, 
        viewCount
    } = this.state.videoData;

    return (
        <>
            <div className='video-container'>
                <div>
                    {this.players( this.props.id )}
                </div>
                <div className='video-info' >
                        <h2>{channelTitle} - {title}</h2>

                        <div className='view-container'>
                            <div>
                                <p>{viewCount} Views</p>
                            </div>
                            <div className='count'>
                                <p className='count-info'>{commentCount} Comments 💬</p>
                                <p className='count-info'>{likeCount} Likes ❤️</p>
                                <p className='count-info'>{dislikeCount} Dislikes 💔</p>
                            </div>
                        </div>
                        <p>{date}</p>
                        <p style={{width:'640px'}}>{description} </p>
                        

                </div>
            </div>
        </>
    )

    }
}
    export default withRouter(VideoPlayer);