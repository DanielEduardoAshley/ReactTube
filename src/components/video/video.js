import React from 'react';



class VideoPlayer extends React.Component{
    constructor(props){
        super(props)
    }

    players=({ props })=>{
        const link = `https://www.youtube.com/embed/rZbFKKpYApc?autoplay=1&fs=1&origin=http://localhost:3000`;
    
        return (
          <iframe title='yt-video' type="text/html" width="640" height="360"
        src={link} frameBorder="0"></iframe>
        )
        }
 

render(){
   const ids = 'rZbFKKpYApc'
  
return <div>{this.players(ids)}</div>
  

}
}
    export default VideoPlayer;