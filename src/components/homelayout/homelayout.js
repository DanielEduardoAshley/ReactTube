import React from 'react';
import Moment from 'moment';

  const Homelayout = (props) => { 
    let str = ''

    // const feedlistKeys = Object.keys(props.active)
   
    console.log(props.feedList,'obj', props.active.orochimaru)
    return (<>
    {/* <div className='rowsss'> */}
    <h2 className='feedTitle'> { `Feed ${1}` }</h2>
        <div className='videofeedContainer'>
        {/* <div className='rowsss'> */}
        {
           props.feedList.map(e=>{
             const feedArr = props.active[e]
             console.log('fed',props.active[e])
          return  (feedArr || []).map((e,i)=>{
            console.log(e.feedTitle)
            str = e.feedTitle

         return <>
          {/* <div className='col-333' key={i}>
         <div>
          <Card onClick={()=>props.vidsPage(e.id)}>
            <CardImg top width="100%" src={`${e.thumbnail.url}`} style={{width : 120, height: 90}} alt="Card image cap" />
            <CardBody>
              <CardTitle>{e.title}</CardTitle>
              <CardSubtitle>{e.channelTitle} {e.publishedAt}</CardSubtitle>
              <CardText></CardText>
            </CardBody>
          </Card>  */}
         
         
          
           {/* </div> */}

        {/* </div>  */}
        {/* <ul >{ i === feedArr.length-1 ? <button   onClick={()=>props.loadmore(e.feedTitle)}>Load More</button> : null }
</ul> */}
        {/* <div className="rowsss"> */}

        <div className='videoThumbnail img__wrap' onClick={()=>props.vidsPage(e.id)} key={i}>
          <img className='img__img' src={`${e.thumbnail.url}`} style={{width : 120, height: 90}}></img>
            {/* <p className='img__description'>{e.title}</p> */}
            {/* <p className='img__description'>{e.publishedAt} {e.channelTitle}</p> */}
            {/* <p className='img__description'>Views</p> */}
          </div>
          {/* </div> */}
        <p className='showMoreButton'>{ i === feedArr.length-1 ? <button   onClick={()=>props.loadmore(e.feedTitle)}>Show More</button> : null }</p>
        </>
        })

      })
      }
      {/* <button onClick={()=>props.loadmore(str)}>Load More</button> */}
      {/* </div> */}
     </div>



     </>
    );
  };

// export default Homelayout;

const Homelayout2 =(props)=>{
  

  let homeContainer = props.feedList.map(e=>{
    const feedArr = props.active[e]
             console.log('fed',props.active[e])
      const videoThumbnail = (feedArr || []).map((e,i)=>{
       
        return <div className='searchImageBox img__wrap' onClick={()=>props.vidsPage(e.id)} key={i}>
                  <img src={`${e.thumbnail.url}`} className='searchImage'></img>

                  <div className='searchInfoBox img__description'>
                      <p className='homeVideoText'>{e.title}</p>
                      <p className='homeVideoText'>{e.channelTitle}</p>
                      <p className='homeVideoPublish'>{ Moment(`${e.publishedAt}`, "YYYYMMDD").fromNow()}</p>
                  </div> 
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