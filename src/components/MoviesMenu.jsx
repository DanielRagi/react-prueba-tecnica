import React from 'react';

const MoviesMenu = () => {
    return (
        <div className="movies-menu-container">
            <div className="menu-container">
                <span className="menu-item selected">Today</span>
                <span className="menu-item separator">/</span>
                <span className="menu-item">This week</span>
                <span className="menu-item separator">/</span>
                <span className="menu-item">Last 30 days</span>
            </div>
        </div>
    );
}

export default MoviesMenu;