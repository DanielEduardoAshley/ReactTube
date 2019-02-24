import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
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
}

export default Navbar;