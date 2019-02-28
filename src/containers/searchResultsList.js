import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';  
import VideoPlayer from '../components/video/video'

const onClick = (videoID) => {
    this.props.history.push(`/video/${videoID}`);
}

const SearchResultsList = (props) => {
    let str = ''
    console.log('resultsss', props.results)

    return (<>
        <div className='rowsss'>
            {
              props.results.map((e,i)=>{
                  console.log('urlss',e.url)
             return <div className='parent' key={i}>
             <div>
              <Card>
                <CardImg top width="100%" src={e.url} style={{width : 120, height: 90}} alt="Click" onClick={()=>onClick(e.id)}/>
                <CardBody>
                  <CardTitle onClick={()=>onClick(e.id)}>{e.title}</CardTitle>
                  <CardSubtitle>{e.channel} {e.published} {e.channelId} {e.description} {e.nextPageToken}</CardSubtitle>
                  <CardText></CardText>
                </CardBody>
              </Card> 
              {/* {str = e.title} */}
               </div>
            </div> 
      
            
            })
            
          }

         </div>
         </>
        );
}

export default SearchResultsList;