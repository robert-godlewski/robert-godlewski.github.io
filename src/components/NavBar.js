// JS Libraries
import React from 'react';
import {Link} from 'react-router-dom';

// Content
import ProPicture from '../media/2022ProfilePicture_RobertGodlewskiCrop3.png';


const NavBar = () => {
    return (
        <header className='container'>
            <h1>Robert Godlewski</h1>
            {/* Need to add in an image of myself at the top */}
            <div>
                <img src={ProPicture} alt="Profile Pic of Robert" height="200px" className='my-2'></img>
            </div>
            <div>
                <Link to={'/'} className='btn btn-primary mx-2'>Home</Link>
                <Link to={'/audio_production'} className='btn btn-primary mx-2'>Audio Production</Link>
                <Link to={'/about'} className='btn btn-primary mx-2'>About</Link>
            </div>
        </header>
    );
};


export default NavBar;
