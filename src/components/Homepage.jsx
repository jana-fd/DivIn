import React from 'react';
import About from './About';
import Contact from './Contact';
import Feedback from './Feedback';
import RotatingCompass from './RotatingCompass';
import '../App.css'


const Homepage = () => {
    return (
      <div className='homepage-container'>
          <div className='compass-container'>
            <RotatingCompass />
          </div>
          <div className ="navigation">
            <div className = "navigation-item"><About /></div>
            <div className = "navigation-item"><Contact /></div>
            <div className = "navigation-item"><Feedback /></div>
          </div>
        </div>
    );
  }

export default Homepage;