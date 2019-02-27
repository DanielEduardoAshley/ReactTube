import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
import './search.css';
import axiosFirstCall from '../../services/axios';

class Search extends Component {
    state = {
        searchInput: this.props.match.params.search,
        results: [{
            video_id: '',
            vidTitle: '',
            views: 0,
            published: '', // Moment.js
            thumbnail: '',
            channel: ''
        }]
    }

    onClick = (e) => {
        const pam = { lol: 'rupa', dog: 'dan', cat: 'yun' };
        this.setState({ test: 'pam' });
        localStorage.setItem('test', JSON.stringify(pam));
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
            .then((r) => console.log(r))
            .catch((err) => console.log(err))
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
                <div className='searchTitle'>
                    <p onClick={this.onClick}>Click me</p>
                    <p>Search Results for {this.props.match.params.search}</p>
                </div>
                <div className='parent'>

                </div>
            </>
        )
    }
}

export default Search;