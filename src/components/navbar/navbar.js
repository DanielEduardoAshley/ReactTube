import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
        <>
            <div className="header">
                <div className="navbar">
                    <p>PRYD</p>
                    <Link to='/home'>Home</Link>
                    <Link to='/user'>User</Link>
                    <Link to='/feededitor'>Feed Editor</Link>
                </div>

                <div className="searchBox">
                    <input placeholder='Search'></input>
                    <Link to='/search/:search_query'>Search</Link>
                </div>
            </div>
        </>
    );
  }
}

export default Navbar;