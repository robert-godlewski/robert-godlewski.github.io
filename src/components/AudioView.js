// JS Libraries
import React from 'react';

// JS Components
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import RenderMarkup from './RenderMarkup';

// Content
import logo from '../media/CometOfDreamsLogo.jpg';


const AudioView = () => {
    const root_path = 'markdown/audio_portfolio/';

    return (
        <div>
            <NavBar/>
            <div className='container border bg-dark-subtle text-dark col col-11 my-2'>
                <img src={logo} alt="Comet of Dreams Logo" height="100px" className='my-2'></img>
                <RenderMarkup fileName={`${root_path}audio_services.md`}/>
            </div>
            <div className='container'>
                <h2>Audio Production Projects</h2>
                <div className='row'>
                    <div className='border bg-danger-subtle text-dark col col-lg-5 col-11 my-2 mx-xxl-5 mx-lg-4 mx-md-2 mx-1'>
                        <RenderMarkup fileName={`${root_path}cod_crusader.md`}/>
                    </div>
                    <div className='border bg-warning-subtle text-dark col col-lg-5 col-11 my-2 mx-xxl-5 mx-lg-4 mx-md-2 mx-1'>
                        <RenderMarkup fileName={`${root_path}madrigals.md`}/>
                    </div>
                    <div className='border bg-success-subtle text-dark col col-lg-5 col-11 my-2 mx-xxl-5 mx-lg-4 mx-md-2 mx-1'>
                        <RenderMarkup fileName={`${root_path}cod_voyage.md`}/>
                    </div>
                    <div className='border bg-primary-subtle text-dark col col-lg-5 col-11 my-2 mx-xxl-5 mx-lg-4 mx-md-2 mx-1'>
                        <RenderMarkup fileName={`${root_path}cover_folsom_prison_blues.md`}/>
                    </div>
                    <div className='border bg-info text-dark col col-lg-5 col-11 my-2 mx-xxl-5 mx-lg-4 mx-md-2 mx-1'>
                        <RenderMarkup fileName={`${root_path}sbd_up_to_chance.md`}/>
                    </div>
                    <div className='border bg-secondary col col-lg-5 col-11 my-2 mx-xxl-5 mx-lg-4 mx-md-2 mx-1'>
                        <RenderMarkup fileName={`${root_path}beyond_jagged.md`}/>
                    </div>
                </div>
            </div>
            <FooterBar/>
        </div>
    );
};


export default AudioView;