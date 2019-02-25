import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
<<<<<<< danBranch
  render() {
    return (
        <>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/user'>User</Link>
                <Link to='/feededitor'>Feed Editor</Link>

                <input placeholder='Search'></input>
                <Link to='/search/:search_query'>Search</Link>
            </div>
        </>
    );
  }
=======
    state = {
        searchInput: '',
    }

    handleClick = (e) => {
        this.props.history.push(`/search/${this.state.searchInput}`);
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
                        <Link to='/' className="navButton">Home</Link>
                        <Link to='/user' className="navButton">User</Link>
                        <Link to='/feededitor' className="navButton" >Feed Editor</Link>
                    </div>
                    <div className="searchBox">
                        <input placeholder='Search' className='navInput' onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
                        <button className="searchButton" onClick={this.handleClick}>Search</button>
                    </div>
                        
                    </div>
            </>
        );
    }
>>>>>>> local
}

export default Navbar;