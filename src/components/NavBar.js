// JS Libraries
import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <header className='container'>
            <h1>Robert Godlewski</h1>
            {/* Need to add in an image of myself at the top */}
            <div>
                <img src="#" alt="Need an image of myself here" height="20%"></img>
            </div>
            <div>
                <Link to={'/'} className='btn btn-primary mx-2'>Home</Link>
                <Link to={'/software_development'} className='btn btn-primary mx-2'>Software Development</Link>
                <Link to={'/audio_production'} className='btn btn-primary mx-2'>Audio Production</Link>
                <Link to={'/about'} className='btn btn-primary mx-2'>About</Link>
            </div>
        </header>
    );
};


export default NavBar;
