import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const onClick = ({id, fun}) => {
    // const {id, fun} = obj;
    const {videoId} = id;
    // console.log('here in onclick', obj, id)
    
    // console.log('This is the videoId before API call', videoId)
    // axiosSecondCall(videoId).then((res)=> {
    //     let vidID = '';
    //     console.log('This is an array we gonna loop thru it and find id',res.data.items)
    //     return res.data.items.map((e,i) => {
    //         const { id } = e.id;
    //         console.log('here is id',id)
    //         return id;
    //     })
    // })
    // console.log('2nd call', axiosSecondCall(videoID))
    // .then(())
    fun(`/video/${videoId}`);
}

const SearchResultsList = ({results, pop}) => {
    console.log('Is this is props?',pop.history.push)
    const fun = pop.history.push;
    // console.log('PROPS', props)
    let str = ''
    // console.log('resultsss', props.results)


    return (
    <>
        <div className='rowsss'>
            {
                results.map((e, i) => {
                    console.log('urlss', e.url)
                    const id = e.id;
                    
                    const obj = {
                        id,
                        fun
                    }
                    return <div className='parent' key={i}>
                        <div>
                            <Card>
                                <CardImg top width="100%" src={e.url} style={{ width: 120, height: 90 }} alt="Click" onClick={() => onClick(obj)} />
                                <CardBody>
                                    <CardTitle onClick={() => onClick(obj)}>{e.title}</CardTitle>
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

export default withRouter(SearchResultsList);