import React from 'react';

import FeaturedVideo from '../containers/FeaturedVideo';
import MoviesMenu from '../components/MoviesMenu';

import '../styles/App.css';
import "react-multi-carousel/lib/styles.css";
import SectionCarouselR from '../containers/SectionCarouselR';
import SectionCarouselL from '../containers/SectionCarouselL';

const AppLayout = () => {
    return (
        <div className="App">
            <FeaturedVideo />
            <MoviesMenu />
            <SectionCarouselR />
            <SectionCarouselL />
        </div>
    );
}

export default AppLayout;