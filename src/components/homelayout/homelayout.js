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
         return <div className='col-333' key={i}>
         <div>
          <Card onClick={()=>props.vidsPage(e.id)}>
            <CardImg top width="100%" src={`${e.thumbnail.url}`} style={{width : 120, height: 90}} alt="Card image cap" />
            <CardBody>
              <CardTitle>{e.title}</CardTitle>
              <CardSubtitle>{e.channelTitle} {e.publishedAt}</CardSubtitle>
              <CardText></CardText>
            </CardBody>
          </Card> 
          {str = e.feedTitle}
           </div>
        </div> 
  
        
        })
      })
      }
      <button onClick={()=>props.loadmore(str)}>Load More</button>

     </div>
     </>
    );
  };

export default Homelayout;