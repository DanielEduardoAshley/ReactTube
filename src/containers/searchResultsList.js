import React from 'react';
import { withRouter } from 'react-router-dom';

const onClick = ({id, fun}) => {
    // const {id, fun} = obj;
    const {videoId} = id;

    fun(`/video/${videoId}`);
}

const SearchResultsList = ({results, pop}) => {
    const fun = pop.history.push;
    let count = 0;
  
    return (
        <>      
            <div className='videoSearchContainer'>
                {
                results.map((e, i) => {
                    const id = e.id;
                    const obj = {
                        id,
                        fun
                    }
                    if(count === 0){
                        count += 1;
                        return(
                        <div key={i} className='videoSearchThumbnail' >
                        <div className='searchImageBox'>
                            <img className='searchImage'src={e.url} alt={e.title} height="120" width="90"></img>
                        </div>

                        <div className='searchInfoBox'>
                                <p className='searchText' onClick={() => onClick(obj)}>{e.title}</p>
                                <p className='searchText'>{e.channel}</p>
                                <p className='searchPublish'>{e.published}</p>
                        </div> 
                    </div>
                    )
                    }

                    if(count === 1){
                        count = 0;
                        return(
                            <div key={i} className='videoSearchThumbnail leftMargin' >
                            <div className='searchImageBox'>
                                <img className='searchImage'src={e.url} alt={e.title} height="120" width="90"></img>
                            </div>
    
                            <div className='searchInfoBox'>
                                <p className='searchText' onClick={() => onClick(obj)}>{e.title}</p>
                                <p className='searchText'>{e.channel}</p>
                                <p className='searchPublish'>{e.published}</p>
                            </div> 
                        </div>
                        )
                    }

                })
            }
        </div>
        
        </>
    );
}

export default withRouter(SearchResultsList);