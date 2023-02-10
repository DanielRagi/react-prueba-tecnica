import React from 'react';

const MoviesMenu = () => {

    const handleClick = (e) => {
        let menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item) => {
            item.classList.remove('selected');
        });
        e.target.classList.add('selected');
    }

    return (
        <div className="movies-menu-container">
            <div className="menu-container">
                <span className="menu-item selected" onClick={handleClick}>Today</span>
                <span className="menu-item separator">/</span>
                <span className="menu-item" onClick={handleClick}>This week</span>
                <span className="menu-item separator">/</span>
                <span className="menu-item" onClick={handleClick}>Last 30 days</span>
            </div>
        </div>
    );
}

export default MoviesMenu;