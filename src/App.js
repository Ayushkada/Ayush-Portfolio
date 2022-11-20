import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/home';
import Favorites from './components/favorites';
import Game from './components/game';
import Projects from './components/projects';
import Resume from './components/resume';
//import Audio from /Users/ayush/Desktop/react-portfolio/src/components/Assets/audio/Big_Sean_One_Man_Can_Change_The_World.mp3;
//import {Howl, Howler} from "howler";


function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/Ayush-Portfolio' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/game' element={<Game/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
    </Routes>
    </Router>
);
}
  
export default App;