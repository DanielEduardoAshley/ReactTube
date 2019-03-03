import React from 'react';

const Homelayout2 =(props)=>{
  

  let homeContainer = props.feedList.map(e=>{
    const feedArr = props.active[e]
             console.log('fed',props.active[e])
      const videoThumbnail = (feedArr || []).map((e,i)=>{
        return <div className='searchImageBox' onClick={()=>props.vidsPage(e.id)} key={i}>
                <img src={`${e.thumbnail.url}`} className='searchImage'></img>
                {/* <p>{e.title}</p>
                <p>{e.publishedAt} {e.channelTitle}</p> */}
              </div>
          
      })
return(<>
        <h2 className='feedTitle'>{ e }</h2>
        <div className='videofeedContainer'>
            {videoThumbnail}
        </div>
        <p className='showMoreButton' onClick={()=>props.loadmore(e)}>Show More</p>



      </>
)


  })

return homeContainer
}

export default Homelayout2