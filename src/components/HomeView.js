// JS Libraries
import React from 'react';
import {Link} from 'react-router-dom';

// JS Components
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import RenderMarkup from './RenderMarkup';


const HomeView = () => {
    const root_path = 'markdown/';

    return (
        <div>
            <NavBar/>
            <div className='row'>
                <div className='col col-12 mx-2 my-2'>
                    <RenderMarkup fileName={`${root_path}summary.md`}/>
                    <p>
                        If you want to know more about Robert Godlewski, <Link to={'/about'}>click here</Link>.
                    </p>
                </div>
                <div className='border col col-5-md col-12-sm mx-2 my-2'>
                    <RenderMarkup fileName={`${root_path}coding_portfolio/software_services.md`}/>
                    <h3>Want More Information?</h3>
                    <p>
                        If you want to preview past Software Development projects, <Link to={'/software_development'}>click here</Link>.
                    </p>
                </div>
                <div className='border col col-5-md col-12-sm mx-2 my-2'>
                    <RenderMarkup fileName={`${root_path}audio_portfolio/audio_services.md`}/>
                    <h3>Want More Information?</h3>
                    <p>
                        If you want to preview past Audio Production projects, <Link to={'/audio_production'}>click here</Link>.
                    </p>
                </div>
            </div>
            <FooterBar/>
        </div>
    );
};


export default HomeView;