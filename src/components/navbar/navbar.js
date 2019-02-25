import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {

    handleClick = (e) => {
        console.log('here, this is props', this.props)
        this.props.history.push(`/search/bubbles`);
    }

    onChange = (e) => {
        console.log('this is input',e.target.value);
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
                        <input placeholder='Search' className='navInput' onChange={this.onChange}></input>
                        <button className="searchButton" onClick={this.handleClick}>Search</button>
                    </div>
                        
                    </div>
            </>
        );
    }
}

export default withRouter(Navbar);