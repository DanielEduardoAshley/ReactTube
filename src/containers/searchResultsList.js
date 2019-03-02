import React from 'react';
import { withRouter } from 'react-router-dom';


const onClick = ({id, fun}) => {
    // const {id, fun} = obj;
    const {videoId} = id;

    fun(`/video/${videoId}`);
}

const SearchResultsList = ({results, pop}) => {
    const fun = pop.history.push;
  
    return (
        <>      
            <div className='videofeedContainer'>
                {
                results.map((e, i) => {
                    const id = e.id;
                    const obj = {
                        id,
                        fun
                    }
                    return <div key={i} className='videoThumbnail'>
                                {/* <img src={e.url} style={{ width: 120, height: 90 }} alt="Click" onClick={() => onClick(obj)}> */}
                                <img src={e.url} alt={e.title} height="120" width="90"></img>
                                <p onClick={() => onClick(obj)}>{e.title}</p>
                                <p>{e.channel} {e.published} {e.channelId} {e.description} {e.nextPageToken}</p>
                                <p>Views</p>

                                {/* <Card>
                                <CardImg top width="100%" src={e.url} style={{ width: 120, height: 90 }} alt="Click" onClick={() => onClick(obj)} />
                                <CardBody>
                                    <CardTitle onClick={() => onClick(obj)}>{e.title}</CardTitle>
                                    <CardSubtitle></CardSubtitle>
                                    <CardText></CardText>
                                </CardBody>
                            </Card> */}
                                
                            </div>

                })
            }
        </div>
        
        </>
    );
}

export default withRouter(SearchResultsList);