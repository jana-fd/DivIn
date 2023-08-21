import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import './ExplorePage.css'

const ExplorePage = () => {
    return (
        <div className = "explore-nav">
            <div className = "explore-item">This is where you explore different companies.</div>
            <div className = "explore-item">
                <Link to="/">
                    Home
                </Link>
            </div>
        </div>

    );
};

export default ExplorePage;