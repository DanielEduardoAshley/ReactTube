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
                    resultsInfo.nToken = res.data.nextPageToken
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
                        resultsInfo.nToken = res.data.nextPageToken
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
    }

    loadMore = (query) => {
        const index = this.state.currentResults.length - 1
        const nextEightVids = this.state.currentResults[index].nToken
        console.log('NEXT 8', nextEightVids)
        axiosFirstCall(this.state.searchInput, nextEightVids)
            .then((res) => {
                console.log('response', res.data.nextPageToken)
                const resultsArr = [];
                console.log('res.data', res)
                res.data.items.map((e, i) => {
                    const { id, snippet } = e;
                    const { videoId } = id;
                    const { publishedAt, channelTitle, channelId, description, thumbnails, title } = snippet;
                    const { high } = thumbnails;
                    const { url } = high;
                    const published = Moment(`${publishedAt}`, "YYYYMMDD").fromNow();
                    const resultsInfo = { id, snippet, videoId, published, channelTitle, channelId, description, thumbnails, title, high, url, }
                    resultsInfo.nToken = res.data.nextPageToken
                    return resultsArr.push(resultsInfo);
                });
                return resultsArr;
            })
            .then(
                (results) => {
                    this.setState({
                        prevSearch: (this.state.prevSearch || []).concat(this.state.results),
                        currentResults: this.state.currentResults.concat(results),
                    }, () => console.log('WORKING??', this.state))
                })
            .catch((err) => console.log(err));
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

                        {list[1] === 'search' ? 
                        <>
                            <SearchResultsList pop={aid} results={this.state.currentResults} /> 
                            
                            {this.state.currentResults.length === 0 ? null
                            : <p className='showMoreButton' onClick={this.loadMore}>Load More</p>}
                        </>
                        : null}

                       
                    </div>
                </div>

            </>
        );
    }


}

export default withRouter(SearchBar);
