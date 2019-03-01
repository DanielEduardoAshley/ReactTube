import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axiosFirstCall from '../../services/axios';
import Moment from 'moment';
import './navbar.css';


class Navbar extends Component {
    state = {
        searchInput: '',
    }

    handleClick = (e) => {
        this.props.history.push(`/search/${this.state.searchInput}`);

        // axiosFirstCall(this.state.searchInput)
        //     .then((res) => {
        //         console.log('response', res)
        //         const resultsArr = [];
        //         res.data.items.map((e, i) => {
        //             const { id, snippet } = e;
        //             const { videoId } = id;
        //             const { publishedAt, channelTitle, channelId, description, thumbnails, title } = snippet;
        //             const thumbnailsURL = thumbnails.high.url;
        //             const published = Moment(`${publishedAt}`, "YYYYMMDD").fromNow();
        //             const resultsInfo = { id, snippet, videoId, published, channelTitle, channelId, description, thumbnailsURL }

        //             return resultsArr.push(resultsInfo);
        //         });
        //         return resultsArr;
        //     })
        //     .then(
        //         (results) => {
        //             this.setState({
        //                 prevSearch: this.state.prevSearch.concat(this.state.results),
        //                 currentResults: results,
        //             }, () => console.log('my state', this.state))
        //         })
        //     .catch((err) => console.log(err));
    }

    onChange = (e) => {
        this.setState({searchInput: e.target.value})
    }

    onKeyDown = (e) => {
        if(e.key.toLowerCase() === 'enter'){
            this.setState({searchInput: e.target.value})
        }
    }

    render() {

        return (
            <>
                <div className="header">
                    <div className="navbar">
                        <p className="navButton">PRYD</p>
                        <Link to='/home' className="navButton">Home</Link>
                        <Link to='/user' className="navButton">User</Link>
                        <Link to='/feededitor' className="navButton" >Feed Editor</Link>
                    </div>
                    <div className="searchBox">
                        <input placeholder='Search' className='navInput' onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
                        <button className="searchButton" onClick={this.handleClick}>Search</button>
                    </div> 
                    {/* Fix Functionality    */}
                    </div>

                    {/* <div className='navBar' style={{height:"800px"}}>
            <h1 className="logo">PRYD</h1>
            <div className='navBarContainer'>
              <p className='navBarButton'>Home</p>
              <p className='navBarButton'>User</p>
              <p className='navBarButton'>Feed Editor</p>
            </div>
          </div> */}
            </>
        );
  }
}

export default withRouter(Navbar);