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

<div style={{position : 'fixed' , top: '0', bottom: '0', right:'0', left:'0', width:'50%', margin:'0 auto', marginTop:'200px' , marginBottom:'100px', textAlign:'center' }} className='overlay'>
<p style={{fontSize:'200px'}}className='logo'>PRYD</p>

</div>
        <video style={{width:'100%', height:'100%'}}ref="vidRef" id="myVideo" loop autoPlay>
    <source src="https://r5---sn-ab5l6nzs.googlevideo.com/videoplayback?itag=18&clen=20528379&key=cms1&gir=yes&mime=video%2Fmp4&txp=5531432&expire=1551598925&ratebypass=yes&fvip=3&dur=236.634&ipbits=0&pl=21&id=o-AEyzpZT3N46o8ylQZFKuXMuTko_m14T9oPgL_lzzBfuZ&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&requiressl=yes&ip=95.211.148.225&c=WEB&ei=7DB7XIa5PJCggQfYk6-IDg&source=youtube&lmt=1543864104149583&signature=262DB62B6A4C76BD995C8C4C5B161C7176DADBE5.2F5DB980E73D112E33D5E865F95606A36F7E29AA&redirect_counter=1&rm=sn-aigesy7s&req_id=977a37e32458a3ee&cms_redirect=yes&ipbypass=yes&mip=69.164.130.248&mm=31&mn=sn-ab5l6nzs&ms=au&mt=1551577197&mv=m&ir=1&rr=12" type="video/mp4" />
    {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
</video>
    <div className="content">
      <h4>Pyrd</h4>
      <p>Our Latest Social Video Player</p>
      <button id="myBtn" onClick={this.myFunctionPlay.bind(this)}>Play</button>
      <button id="myBtn" onClick={this.myFunction.bind(this)}>Pause</button>
      <button id="myBtn" onClick={this.myFunctionEnter.bind(this)}>Enter</button>
</div>
    <div className="content" style={{background : 'none'}}>
      <h4></h4>
      <p className='position'></p>
      {/* <button onClick={this.myFunctionPlay.bind(this)}>Play</button> */}
      {/* <button style={{fontSize : 12, marginTop:'80%' }} onClick={this.myFunction.bind(this)}>Pause</button> */}
      <button style={{fontSize:'50px', backgroundColor:'none', marginBottom:'20%', marginLeft:'45%' ,justifyContent:'center'}} className='logo' onClick={this.myFunctionEnter.bind(this)}>Enter</button>

   </div>
  
    

  </>)
}
}

export default Splashpage