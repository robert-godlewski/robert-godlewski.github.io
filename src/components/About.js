// JS Libraries
import React from 'react';
import {Link} from 'react-router-dom';

// JS Components
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import RenderMarkup from './RenderMarkup';


const About = () => {
    return (
        <div>
            <NavBar/>
            <div className='container bg-success-subtle text-dark col col-12'>
                <RenderMarkup fileName='markdown/about.md'/>
                <p>
                    <Link to={'/'} className='btn btn-secondary mx-2'>Software Development Portfolio.</Link>
                    <Link to={'/audio_production'} className='btn btn-secondary mx-2'>Audio Production Portfolio.</Link>
                </p>
            </div>
            <FooterBar/>
        </div>
    );
};


export default About;