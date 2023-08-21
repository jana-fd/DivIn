import React from 'react';
import './RotatingCompass.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const RotatingCompass = () => {
    return (
             <div>
            <Link to="/explore">
            <div className = "rotating-compass"></div>
            </Link>
        </div>
    );
};

export default RotatingCompass;