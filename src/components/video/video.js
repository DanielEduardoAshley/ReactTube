import React from 'react';



class VideoPlayer extends React.Component{
    constructor(props){
        super(props)
        
    }

    players=( id )=>{
        const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`;
    
        return (
          <iframe title='yt-video' type="text/html" width="640" height="360"
        src={link} frameBorder="0"></iframe>
        )
        }
 

render(){
    let e =  'rZbFKKpYApc' 
    console.log('props', this.props)
 
 
  
return <div>{
     this.players( this.props.id )
}) }</div>
  

}
}
    export default VideoPlayer;