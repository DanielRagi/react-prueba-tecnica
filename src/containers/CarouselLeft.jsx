import React from 'react';
import Carousel from "react-multi-carousel";
import useResponsiveCarousel from '../hooks/useResponsiveCarousel';
import leftButtonActive from '../assets/images/icons/left_active.png';
import rightButtonActive from '../assets/images/icons/right_active.png';
import leftButtonInactive from '../assets/images/icons/left_inactive.png';
import rightButtonInactive from '../assets/images/icons/right_inactive.png';
import movies from '../hooks/useMovies';
import Movie from '../components/Movie'; 

const CarouselLeft = () => {

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group">
                {currentSlide === 0 ? <img src={leftButtonInactive} alt="Left arrow" onClick={() => previous()} /> : <img src={leftButtonActive} alt="Left arrow" onClick={() => previous()} />}
                {currentSlide === Number(rest.carouselState.deviceType) ? <img src={rightButtonInactive} alt="Right arrow" onClick={() => next()} /> : <img src={rightButtonActive} alt="Right arrow" onClick={() => next()} />}
            </div>
        );
    };

    return (
        <Carousel 
            responsive={useResponsiveCarousel} 
            containerClass="carousel-container" 
            itemClass="carousel-item" 
            arrows={false} 
            renderButtonGroupOutside={true} 
            customButtonGroup={<ButtonGroup />} 
        >
            {movies.map(movie => ( 
                <Movie movie={movie} key={movie.id} /> 
            ))}
        </Carousel>
    );
}

export default CarouselLeft;