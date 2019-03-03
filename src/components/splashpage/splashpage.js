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
      
        <video style={{width:'100%', height:'100%'}}ref="vidRef" id="myVideo" loop autoPlay>
    <source src="https://r3---sn-ab5szn7e.googlevideo.com/videoplayback?key=cms1&mime=video%2Fmp4&gir=yes&requiressl=yes&ratebypass=yes&dur=236.634&c=WEB&fvip=3&lmt=1543864104149583&source=youtube&clen=20528379&id=o-AOPvJvE8wkW99iAhbysWK2bbjuTrZ5hQ4_I1trKGmohX&expire=1551577049&ei=edt6XIjjHcvqgAe_wZOYAw&pl=21&ipbits=0&ip=85.17.156.76&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&txp=5531432&itag=18&signature=15EECEA337E1475B42C02C80EF174133F300DE36.678D688E6CEACA8C7B73C028727C3AA58C42E0D6&redirect_counter=1&rm=sn-5hnelz7s&req_id=22763eee9192a3ee&cms_redirect=yes&ipbypass=yes&mip=69.164.130.248&mm=31&mn=sn-ab5szn7e&ms=au&mt=1551555416&mv=m" type="video/mp4" />
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