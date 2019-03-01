import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    state = {
        searchInput: '',
    }

    handleClick = () => {
        this.props.history.push(`/search/${this.state.searchInput}`);
    }

    onChange = (e) => {
        this.setState({searchInput: e.target.value})
    }

    handleEnter = (e) => {
        if(e.key.toLowerCase() === 'enter'){
            this.handleClick()
        }
    }

    render() {

        return (
            <>
            <div className='header' style={{ display:'flex', flexWrap:'wrap', paddingLeft:'30px', marginTop:'50px;'}}>
                <div className='navbar' style={{display:'flex', flexWrap:'wrap', marginRight:'30px'}}>
                    <p className="navButton">PRYD</p>
                    <Link to='/home' className="navButton">Home</Link>
                    <Link to='/user' className="navButton">User</Link>
                    <Link to='/feededitor' className="navButton">Feed Editor</Link>
                </div>
                <div className='navbarSearch'>
                    <input placeholder='Search' className='navInput' onChange={this.onChange} onKeyDown={this.handleEnter}></input>
                    <p className="searchButton" onClick={this.handleClick}>Search</p>
                </div>
            </div>
            </>
        );
  }
}

export default withRouter(Navbar);