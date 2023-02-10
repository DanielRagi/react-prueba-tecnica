import React from 'react';
import CarouselLeft from '../containers/CarouselLeft';
import CarouselHeader from '../components/CarouselHeader';

const SectionCarouselR = () => {
    return (
        <section className="movies-carousel">
            <CarouselLeft />
            <CarouselHeader />
        </section>
    );
}

export default SectionCarouselR;