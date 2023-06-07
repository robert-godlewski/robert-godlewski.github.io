// Stylesheets
import './App.css';

// JS Libraries
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


// JS Components
import HomeView from './components/HomeView';
import CodingView from './components/CodingView';
import AudioView from './components/AudioView';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/software_development" element={<CodingView/>}/>
          <Route path="/audio_production" element={<AudioView/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
