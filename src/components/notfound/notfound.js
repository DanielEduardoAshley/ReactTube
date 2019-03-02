import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = (props) => {
    return (
        <>
            <div>
                <h1>Error: Path Not Found</h1>
                <br></br>
                <h2>Check path name</h2>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <Link to="/" className='navBarButton'>Home</Link>
        </>
    )

}

export default NotFound;