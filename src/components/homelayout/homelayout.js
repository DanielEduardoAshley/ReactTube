import React from 'react';
import Moment from 'moment';

const Homelayout2 = (props) => {

  let homeContainer = props.feedList.map(e => {
    const feedArr = props.active[e]
    console.log('fed', props.active[e])
    const videoThumbnail = (feedArr || []).map((e, i) => {

      return <div className='searchImageBox img__wrap' onClick={() => props.vidsPage(e.id)} key={i}>
        <img src={`${e.thumbnail.url}`} className='searchImage'></img>

        <div className='searchInfoBox img__description'>
          <p className='homeVideoText'>{e.title}</p>
          <p className='homeVideoText'>{e.channelTitle}</p>
          <p className='homeVideoPublish'>{Moment(`${e.publishedAt}`, "YYYYMMDD").fromNow()}</p>
        </div>
      </div>

    })

    return (<>
      <h2 className='feedTitle'>{e}</h2>
      <div className='videofeedContainer'>
        {videoThumbnail}
      </div>
      <p className='showMoreButton' onClick={() => props.loadmore(e)}>Show More</p>
    </>
    )
  })

  return homeContainer
}

export default Homelayout2