import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
    onClickRoute (routeName) {
        localStorage.setItem('routeName', routeName)
    }
    render() {
        return (
            <>
                <div className='navBar' >
                    <h1 className="logo">PRYD</h1>
                    <div className='navBarContainer'>
                        <Link to='/home' className="navBarButton" onClick={() => this.onClickRoute('home')}>Home</Link>
                        <Link to='/user' className="navBarButton" onClick={() => this.onClickRoute('user')}>User</Link>
                        <Link to='/feededitor' className="navBarButton" onClick={() => this.onClickRoute('feed editor')}>Feed Editor</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Navbar);