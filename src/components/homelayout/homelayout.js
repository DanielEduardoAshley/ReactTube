import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

  const Homelayout = (props) => { 
    let str = ''

    // const feedlistKeys = Object.keys(props.active)
   
    console.log(props.feedList,'obj', props.active.orochimaru)
    return (<>
    <div className='rowsss'>
        {
           props.feedList.map(e=>{
             const feedArr = props.active[e]
             console.log('fed',props.active[e])
          return  (feedArr || []).map((e,i)=>{
            console.log(e.feedTitle)
            str = e.feedTitle

         return <>
          <div className='col-333' key={i}>
         <div>
          <Card onClick={()=>props.vidsPage(e.id)}>
            <CardImg top width="100%" src={`${e.thumbnail.url}`} style={{width : 120, height: 90}} alt="Card image cap" />
            <CardBody>
              <CardTitle>{e.title}</CardTitle>
              <CardSubtitle>{e.channelTitle} {e.publishedAt}</CardSubtitle>
              <CardText></CardText>
            </CardBody>
          </Card> 
          
           </div>

        </div> 
        <ul >{ i === feedArr.length-1 ? <button   onClick={()=>props.loadmore(e.feedTitle)}>Load More</button> : null }
</ul>
        </>
        })

      })
      }
      {/* <button onClick={()=>props.loadmore(str)}>Load More</button> */}

     </div>
     </>
    );
  };

export default Homelayout;