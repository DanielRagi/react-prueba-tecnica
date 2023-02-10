import React from 'react';
import CarouselRight from './CarouselRight';
import CarouselHeader from '../components/CarouselHeader';

const SectionCarouselL = () => {
    return (
        <section className="movies-carousel r">
            <CarouselHeader />
            <CarouselRight />
        </section>
    );
}

export default SectionCarouselL;