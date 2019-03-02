import React from 'react';
import axios from 'axios'
import { axiosFirstCall } from '../../services/axios';

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
componentDidMount(){
    axiosFirstCall('ants', '').then((d)=>{
        console.log(d)
    })
}

render(){
  return(<>
        {/* <video ref="vidRef" id=" video-bg" loop autoPlay>
    <source  src="https://r3---sn-8xgp1vo-ab5e.googlevideo.com/videoplayback?clen=20528379&itag=18&mime=video%2Fmp4&gir=yes&key=cms1&txp=5531432&ei=aTd6XI3nMIjb1gKh17_YDw&c=WEB&source=youtube&lmt=1543864104149583&id=o-ADn_QRXznGOtn0A4R319DBrl2NouHVzUcLAZPzLpjZiF&pl=16&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&ip=85.17.156.76&requiressl=yes&ratebypass=yes&expire=1551535049&ipbits=0&dur=236.634&fvip=3&signature=1E1F6A5B08F0E36958CAE43B65211FE634F4E98A.22EE9C49FE96A572F14A3D5C67CE6B52D55F41BF&redirect_counter=1&rm=sn-5hnelz7s&req_id=ad08fbca86b2a3ee&cms_redirect=yes&ipbypass=yes&mip=71.105.181.179&mm=31&mn=sn-8xgp1vo-ab5e&ms=au&mt=1551513375&mv=m" type="video/mp4" />
    {/* "https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" */}
    {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
{/* </video> */} 
  <div className="videoBgWrapper">
    <video ref="vidRef" style={{height: '100%' , width: '100%'}} className='videobg'loop  autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
    <source  src="https://r3---sn-8xgp1vo-ab5e.googlevideo.com/videoplayback?clen=20528379&itag=18&mime=video%2Fmp4&gir=yes&key=cms1&txp=5531432&ei=aTd6XI3nMIjb1gKh17_YDw&c=WEB&source=youtube&lmt=1543864104149583&id=o-ADn_QRXznGOtn0A4R319DBrl2NouHVzUcLAZPzLpjZiF&pl=16&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&ip=85.17.156.76&requiressl=yes&ratebypass=yes&expire=1551535049&ipbits=0&dur=236.634&fvip=3&signature=1E1F6A5B08F0E36958CAE43B65211FE634F4E98A.22EE9C49FE96A572F14A3D5C67CE6B52D55F41BF&redirect_counter=1&rm=sn-5hnelz7s&req_id=ad08fbca86b2a3ee&cms_redirect=yes&ipbypass=yes&mip=71.105.181.179&mm=31&mn=sn-8xgp1vo-ab5e&ms=au&mt=1551513375&mv=m" type="video/mp4" />
        {/* <source src="video/big_buck_bunny.mp4" type="video/mp4">
        <source src="video/big_buck_bunny.ogv" type="video/ogg"> */}
    </video>
  
		
	</div>
    <div className="content">
      <h1>Pyrd</h1>
      <p>Our Latest Social Video Player</p>
      <button id="myBtn" onClick={this.myFunctionPlay.bind(this)}>Play</button>
      <button id="myBtn" onClick={this.myFunction.bind(this)}>Pause</button>
      <button id="myBtn" onClick={this.myFunctionEnter.bind(this)}>Enter</button>
    </div>
  
    

  </>)
}
}

export default Splashpage