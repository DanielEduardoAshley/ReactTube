import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <>
                <div className='navBar' >
                    <h1 className="logo">PRYD</h1>
                    <div className='navBarContainer'>
                        <Link to='/home' className="navBarButton">Home</Link>
                        <Link to='/user' className="navBarButton">User</Link>
                        <Link to='/feededitor' className="navBarButton" >Feed Editor</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Navbar);