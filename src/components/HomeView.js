// JS Libraries
import React from 'react';
import {Link} from 'react-router-dom';

// JS Components
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import RenderMarkup from './RenderMarkup';

// Content
import logo from '../media/CometOfDreamsLogo.jpg';


const HomeView = () => {
    const root_path = 'markdown/';
    const audio_portfolio_path = root_path+'audio_portfolio/'
    const software_portfolio_path = root_path+'coding_portfolio/'

    return (
        <div>
            <NavBar/>
            <div className='col col-12 mx-2 my-2'>
                <RenderMarkup fileName={`${root_path}summary.md`}/>
                <p>
                    If you want to know more about Robert Godlewski, <Link to={'/about'}>click here</Link>.
                </p>
            </div>
            <div className='container border col col-11 my-2'>
                <RenderMarkup fileName={`${software_portfolio_path}software_services.md`}/>
            </div>
            <div className='container justify-content-center'>
                <h2>Software Development Experience</h2>
                <div className='row'>
                    <div className='border col col-md-5 col-11 my-2 mx-xl-5 mx-md-4 mx-3'>
                        <RenderMarkup fileName={`${software_portfolio_path}portfolio_specs.md`}/>
                    </div>
                    <div className='border col col-md-5 col-11 my-2 mx-xl-5 mx-md-4 mx-3'>
                        <RenderMarkup fileName={`${software_portfolio_path}xethub.md`}/>
                    </div>
                    <div className='border col col-md-5 col-11 my-2 mx-xl-5 mx-md-4 mx-3'>
                        <RenderMarkup fileName={`${software_portfolio_path}crm_web_app.md`}/>
                    </div>
                    <div className='border col col-md-5 col-11 my-2 mx-xl-5 mx-md-4 mx-3'>
                        <RenderMarkup fileName={`${software_portfolio_path}reddit_clone.md`}/>
                    </div>
                </div>
            </div>
            <div className='container border col col-11 my-2'>
                <img src={logo} alt="Comet of Dreams Logo" height="100px" className='my-2'></img>
                <RenderMarkup fileName={`${audio_portfolio_path}audio_services.md`}/>
                <h3>Want More Information?</h3>
                <p>If you want to preview past Audio Production projects, <Link to={'/audio_production'}>click here</Link>.</p>
            </div>
            <FooterBar/>
        </div>
    );
};


export default HomeView;