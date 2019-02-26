import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

  const Homelayout = (props) => {
    console.log('active',props.active)
    return (<>
    <div className='rowsss'>
        {props.active.map((e,i)=>{
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
          <button onClick={()=>props.loadmore(e.feedTitle)}>Load More</button>
           </div>
        </div> 
  
        
        })
      }
      
     </div>
     </>
    );
  };

export default Homelayout;