import React, { Component } from 'react';
// import axios from 'axios';
import Moment from 'moment';
import './search.css';
import axiosFirstCall from '../../services/axios';

class Search extends Component {
    state = {
        searchInput: this.props.match.params.search,
        prevSearch: [],
        currentResults: [{
            videoId: '',
            title: '',
            publishedAt: '',
            thumbnailsURL: '',
            channelTitle: '',
            channelId: '',
            description: '',
            nextPageToken: '',
        }]
    }

    onClick = (e) => {

        axiosFirstCall(this.state.searchInput)
        .then((res) => {
            console.log(res)
            const resultsArr = [];
            res.data.items.map((e, i) => {
                const { id, snippet } = e;
                const { videoId } = id;
                const { publishedAt, channelTitle, channelId, description, thumbnails, title } = snippet;
                const thumbnailsURL = thumbnails.high.url;
                const resultsInfo = { id, snippet, videoId, publishedAt, channelTitle, channelId, description, thumbnailsURL }
                const published = Moment(`${publishedAt}`, "YYYYMMDD").fromNow();

                return resultsArr.push(resultsInfo);
            });
            return resultsArr;
        })
        .then(
            (results) => {
                this.setState({
                    prevSearch: this.state.prevSearch.concat(this.state.results),
                    currentResults: results,
                }, () => console.log(this.state, 'my state'))
            })
        .catch((err) => console.log(err));

        const pam = { lol: 'rupa', dog: 'dan', cat: 'yun' };
        this.setState({ test: 'pam' });
        localStorage.setItem('test', JSON.stringify(pam));
    }

    // onChange = (e) => {
    //     this.setState({searchInput: e.target.value})
    // }

    onKeyDown = (e) => {
        if(e.key.toLowerCase() === 'enter'){
            this.setState({searchInput: e.target.value})
        }
    }

    componentDidMount() {
        const { searchInput } = this.state;
        const getPam = JSON.parse(localStorage.getItem('test'));
        /*
        const searchResult = localStorage.getItem('searchResult');
        if(searchResult.searchInput === searchInput) {
            return;
        } else {
            Axios call with this.state.searchInput,
            // inside of axio call, make sure to use moment to parse date object
            inside of .then, 
            setState with videoResults
            and do localStorage.setItem();
        }
    
        */

        axiosFirstCall(this.state.searchInput)
            .then((res) => {
                console.log(res)
                const resultsArr = [];
                res.data.items.map((e, i) => {
                    const { id, snippet } = e;
                    const { videoId } = id;
                    const { publishedAt, channelTitle, channelId, description, thumbnails, title } = snippet;
                    const thumbnailsURL = thumbnails.high.url;
                    const resultsInfo = { id, snippet, videoId, publishedAt, channelTitle, channelId, description, thumbnailsURL }
                    const published = Moment(`${publishedAt}`, "YYYYMMDD").fromNow();

                    return resultsArr.push(resultsInfo);
                });
                return resultsArr;
            })
            .then(
                (results) => {
                    this.setState({
                        prevSearch: (this.state.prevSearch || []).concat(this.state.results),
                        currentResults: results,
                    }, () => console.log(this.state, 'my state'))
                })
            .catch((err) => console.log(err));
    }

    /*
    When click on thumbnail, use this function to go to video page
     handleClick = (video_id) => {
            this.props.history.push(`/video/${video_id}`);
        }
    */

    /*
    When click on showMore, use this function
        showMoreClick = (pageToken) => {
            Axios call with pageToken
            setState with new videoResult array pushed to previous state videoResult array
            and do localStorage.setItem();
    
        }
    */

    render() {
        // console.log(this.props.match.params.search)
        return (
            <>
                <div className="searchBox">
                        <input placeholder='Search' className='navInput' onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
                        <button className="searchButton" onClick={this.onClick}>Search</button>
                </div>
                <div className='searchTitle'>
                    <p onClick={this.onClick}>Click me</p>
                    <p>Search Results for {this.props.match.params.search}</p>
                </div>
                
            </>
        )
    }
}

export default Search;