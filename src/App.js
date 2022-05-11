import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import About from './About';
import Contact from './Contact';
import Page from './Page';
import Gallery from './Gallery';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function App(){
  return(
    <Router>
      <div className='app-main-div'>
        <div className='head'>
          <h2>React Developer</h2>
        </div>
        <div className='nav'>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/page'>Page</Link></li>
            <button className='app-btn'><Link to='./contact'>Join Class</Link></button>
          </ul>
        </div>
        
        <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/page' element={<Page/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}
export default App;