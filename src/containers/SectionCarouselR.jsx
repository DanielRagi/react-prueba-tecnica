import React from 'react';
import CarouselLeft from '../containers/CarouselLeft';
import CarouselHeaderL from '../components/CarouselHeaderL';

const SectionCarouselR = () => {
    return (
        <section className="movies-carousel">
            <CarouselLeft />
            <CarouselHeaderL />
        </section>
    );
}

export default SectionCarouselR;