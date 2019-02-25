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
        inside of .then, 
        setState with videoResults
        and do localStorage.setItem();
    }

    */
}
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