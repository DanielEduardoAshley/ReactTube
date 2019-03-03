import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

const NotFound = (props) => {
    return (
        <>
            <div className="text-wrapper">
                <div className="error-text">Error: Path Not Found!</div>
                <br></br>
                <div className="error-msg">Check path name</div>
                <br></br>
            </div>
                <div className="home-btn">
                <Link to="/" className='navBarButton'>Home</Link>
            </div>
        </>
    )

}

export default NotFound;