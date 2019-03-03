import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { axiosFirstCall } from '../../services/axios';
import Moment from 'moment';
import SearchResultsList from '../../containers/searchResultsList';
import spinner from '../../Triangles-1s-200px.gif'
import './searchBar.css'

class SearchBar extends Component {
    state = {
        searchInput: '',
        savedSearch: '',
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
                        searchInput: '',
                        savedSearch: this.state.searchInput,
                        prevSearch: (this.state.prevSearch || []).concat(this.state.results),
                        currentResults: results,
                        isLoading: false
                    })
                })
            .catch((err) => console.log(err));
            console.log('LOOK AT THIS', e.target.value)

    }

    onChange = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    onKeyDown = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            this.handleClick(e);
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

        return (
            <>
                <div className='searchBox'>
                    <button className="searchButton" onClick={this.handleClick}>Search</button>
                    <input className='searchInput' value={this.state.searchInput} onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
                </div>

                <div className='pageContainer'>
                    <div className='search-wrapper'>
                        {this.state.isLoading === true ? <div className='spinner'><img src={spinner} alt='Loading...'></img></div> :
                            <>
                                <div>
                                    {list[1] === 'search' ?
                                        <>

                                            <div className='searchResultText'>
                                                <p>Search Results for {this.state.savedSearch}</p>
                                                <br></br>
                                            </div>

                                            <SearchResultsList pop={aid} results={this.state.currentResults} />

                                            {this.state.currentResults.length === 0 ? null
                                                : <p className='showMoreButton' onClick={this.loadMore}>Load More</p>}
                                        </>

                                        : null}

                                </div>
                                <div className='spinner'>
                                    {this.state.loadingMore === true ? <img src={spinner} alt='Loading...'></img> : null}
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
