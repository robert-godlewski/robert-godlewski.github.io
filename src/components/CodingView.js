// JS Libraries
import React from 'react';

// JS Components
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import RenderMarkup from './RenderMarkup';


const CodingView = () => {
    const root_path = 'markdown/coding_portfolio/';

    return (
        <div>
            <NavBar/>
            <div className='container border my-2'>
                <RenderMarkup fileName={`${root_path}software_services.md`}/>
            </div>
            <div className='container'>
                <h2>Software Development Experience</h2>
                <div className='row'>
                    <div className='border col col-xl-3 col-md-5 col-11 my-2 mx-xl-5 mx-md-4 mx-3'>
                        <RenderMarkup fileName={`${root_path}portfolio_specs.md`}/>
                    </div>
                    <div className='border col col-xl-3 col-md-5 col-11 my-2 mx-xl-5 mx-md-4 mx-3'>
                        <RenderMarkup fileName={`${root_path}xethub.md`}/>
                    </div>
                    <div className='border col col-xl-3 col-md-5 col-11 my-2 mx-xl-5 mx-md-4 mx-3'>
                        <RenderMarkup fileName={`${root_path}crm_web_app.md`}/>
                    </div>
                    <div className='border col col-xl-3 col-md-5 col-11 my-2 mx-xl-5 mx-md-4 mx-3'>
                        <RenderMarkup fileName={`${root_path}reddit_clone.md`}/>
                    </div>
                </div>
            </div>
            <FooterBar/>
        </div>
    );
};


export default CodingView;