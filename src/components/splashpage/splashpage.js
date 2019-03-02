import React from 'react';


class Splashpage extends React.Component{
    myFunction=()=>{
   
        console.log('hello world')
        this.refs.vidRef.pause()
      }
    
      myFunctionPlay=()=>{
       
        console.log('hello world')
        this.refs.vidRef.play()
      }
      myFunctionEnter=()=>{
       
        console.log('hello world')
        this.props.history.push('/home')
      }
render(){
  return(<>
      
        <video ref="vidRef" id="myVideo" loop autoPlay>
    <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
    {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
</video>
    <div class="content">
      <h4>Pyrd</h4>
      <p>Our Latest Social Video Player</p>
      <button id="myBtn" onClick={this.myFunctionPlay.bind(this)}>Play</button>
      <button id="myBtn" onClick={this.myFunction.bind(this)}>Pause</button>
      <button id="myBtn" onClick={this.myFunctionEnter.bind(this)}>Enter</button>


    </div>
  
    

  </>)
}
}

export default Splashpage