import React from 'react';
import CarouselRight from './CarouselRight';
import CarouselHeaderR from '../components/CarouselHeaderR';

const SectionCarouselL = () => {
    return (
        <section className="movies-carousel r">
            <CarouselHeaderR />
            <CarouselRight />
        </section>
    );
}

export default SectionCarouselL;