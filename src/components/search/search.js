import React, { Component } from 'react';

class Search extends Component {
state = {
    searchInput:this.props.match.params.search,
    test: 'lol',
}

onClick = (e) => {
    const pam = {lol:'rupa', dog:'dan', cat:'yun'};
    this.setState({test: 'pam'});
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
        <div>
            <p onClick={this.onClick}>Click me</p>
            <p>Search Result Page</p>
        </div>
    )
}
}

export default Search;