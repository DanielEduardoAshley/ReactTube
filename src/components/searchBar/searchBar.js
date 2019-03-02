import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { axiosFirstCall } from '../../services/axios';
import Moment from 'moment';
import SearchResultsList from '../../containers/searchResultsList';

class SearchBar extends Component {
    state = {
        searchInput: '',
        currentResults: [],
    }

    handleClick = (e) => {
        this.props.history.push(`/search/${this.state.searchInput}`);
        console.log('input', this.state.searchInput)
        console.log('???', this.props)
        axiosFirstCall(this.state.searchInput)
            .then((res) => {
                console.log('response', res)
                const resultsArr = [];
                res.data.items.map((e, i) => {
                    const { id, snippet } = e;
                    const { videoId } = id;
                    const { publishedAt, channelTitle, channelId, description, thumbnails, title } = snippet;
                    const { high } = thumbnails;
                    const { url } = high;
                    const published = Moment(`${publishedAt}`, "YYYYMMDD").fromNow();
                    const resultsInfo = { id, snippet, videoId, published, channelTitle, channelId, description, thumbnails, title, high, url }

                    return resultsArr.push(resultsInfo);
                });
                return resultsArr;
            })
            .then(
                (results) => {
                    this.setState({
                        prevSearch: (this.state.prevSearch || []).concat(this.state.results),
                        currentResults: results,
                    }, () => console.log('my state', this.state))
                })
            .catch((err) => console.log(err));
    }

    onChange = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    onKeyDown = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            this.setState({ searchInput: e.target.value })
        }
    }

    render() {
        const aid = { ...this.props }
        let list = this.props.location.pathname.split('/')
        console.log('LIST', list)
        console.log('THIS', this.props)
        return (
            <>
                

                <div className='searchBox'>
                    <button className="searchButton" onClick={this.handleClick}>Search</button>
                    <input className='searchInput' onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
                </div>
                    
                    

                    <div className='pageContainer'>
                        <div>
                            {/* <div className='searchTitle' style={{border:'3px solid green'}}>
                                { list[1] === 'search' ? <p>Search Results for {this.state.searchInput}</p>
                                : null}
                            </div> */}

                            {list[1] === 'search' ? <SearchResultsList pop={aid} results={this.state.currentResults} /> : null}

                            {/* <p className='showMoreButton'> Show More</p>  */}
                        </div> 
                        
                    </div>
                                  
            </>
        );
    }


}

export default withRouter(SearchBar);
