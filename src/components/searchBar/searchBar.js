import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { axiosFirstCall } from '../../services/axios';
import Moment from 'moment';
import SearchResultsList from '../../containers/searchResultsList';

class SearchBar extends Component {
    state = {
        searchInput: '',
        currentResults: [],
        prevSearch: [],
        isLoading: false,
        loadingMore: false
    }

    handleClick = (e) => {
        this.props.history.push(`/search/${this.state.searchInput}`);
        console.log('input', this.state.searchInput)

        this.setState({
            isLoading: true
        })

        axiosFirstCall(this.state.searchInput)
            .then((res) => {

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
                        isLoading: false
                    })
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

            this.setState({
                isLoading: true
            })

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
                            isLoading: false
                        })
                    })
                .catch((err) => console.log(err));
        }
    }

    loadMore = (query) => {
        const index = this.state.currentResults.length - 1
        const nextEightVids = this.state.currentResults[index].nToken

        this.setState({
            isLoading: false,
            loadingMore: true
        })

        axiosFirstCall(this.state.searchInput, nextEightVids)
            .then((res) => {
                const resultsArr = [];

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
                        isLoading: false,
                        loadingMore: false
                    })
                })
            .catch((err) => console.log(err));
    }

    render() {
        const aid = { ...this.props }
        let list = this.props.location.pathname.split('/')
        const spinner = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"

        return (
            <>
                <div className='searchBox'>
                    <button className="searchButton" onClick={this.handleClick}>Search</button>
                    <input className='searchInput' onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
                </div>

                <div className='pageContainer'>
                    <div className=''>
                        {this.state.isLoading === true ? <div className='spinner'><img src={spinner}></img></div> :
                            <>
                                <div>
                                    {list[1] === 'search' ?
                                        <>

                                            <div className='searchTitle'>
                                                <p>Search Results for {this.state.searchInput}</p>
                                                <br></br>
                                            </div>

                                            <SearchResultsList pop={aid} results={this.state.currentResults} />

                                            {this.state.currentResults.length === 0 ? null
                                                : <p className='showMoreButton' onClick={this.loadMore}>Load More</p>}
                                        </>

                                        : null}

                                </div>
                                <div className='spinner'>
                                    {this.state.loadingMore === true ? <img src={spinner}></img> : null}
                                </div>
                            </>
                        }

                    </div>
                </div>

            </>
        );
    }
}

export default withRouter(SearchBar);
