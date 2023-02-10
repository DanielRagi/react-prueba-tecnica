import React from 'react';
import Carousel from "react-multi-carousel";
import leftButtonActive from '../assets/images/icons/left_active.png';
import rightButtonActive from '../assets/images/icons/right_active.png';
import leftButtonInactive from '../assets/images/icons/left_inactive.png';
import rightButtonInactive from '../assets/images/icons/right_inactive.png';

const CarouselLeft = () => {

    const responsive = {
        1: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        2: {
            breakpoint: { max: 3000, min: 1840 },
            items: 6
        },
        3: {
            breakpoint: { max: 1840, min: 1570 },
            items: 5
        },
        4: {
            breakpoint: { max: 1570, min: 1320 },
            items: 4
        },
        5: {
            breakpoint: { max: 1320, min: 1050 },
            items: 3
        },
        6: {
            breakpoint: { max: 1050, min: 780 },
            items: 2
        },
        7: {
            breakpoint: { max: 780, min: 0 },
            items: 1
        }
    };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group-l">
                {currentSlide === 0 ? <img src={leftButtonInactive} alt="Left arrow" onClick={() => previous()} /> : <img src={leftButtonActive} alt="Left arrow" onClick={() => previous()} />}
                {currentSlide === Number(rest.carouselState.deviceType) ? <img src={rightButtonInactive} alt="Right arrow" onClick={() => next()} /> : <img src={rightButtonActive} alt="Right arrow" onClick={() => next()} />}
            </div>
        );
    };

    return (
        <Carousel responsive={responsive} containerClass="carousel-container" itemClass="carousel-item" arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} >

            <div className="movie">
                <div className="movie-cover">
                    <img src="https://picsum.photos/164/240" alt="movie cover" />
                </div>
                <div className="movie-info">
                    <p className="movie-genre">Genre, Year</p>
                    <p className="movie-name">Movie name</p>
                </div>
            </div>

            <div className="movie">
                <div className="movie-cover">
                    <img src="https://picsum.photos/164/240" alt="movie cover" />
                </div>
                <div className="movie-info">
                    <p className="movie-genre">Genre, Year</p>
                    <p className="movie-name">Movie name</p>
                </div>
            </div>

            <div className="movie">
                <div className="movie-cover">
                    <img src="https://picsum.photos/164/240" alt="movie cover" />
                </div>
                <div className="movie-info">
                    <p className="movie-genre">Genre, Year</p>
                    <p className="movie-name">Movie name</p>
                </div>
            </div>

            <div className="movie">
                <div className="movie-cover">
                    <img src="https://picsum.photos/164/240" alt="movie cover" />
                </div>
                <div className="movie-info">
                    <p className="movie-genre">Genre, Year</p>
                    <p className="movie-name">Movie name</p>
                </div>
            </div>

            <div className="movie">
                <div className="movie-cover">
                    <img src="https://picsum.photos/164/240" alt="movie cover" />
                </div>
                <div className="movie-info">
                    <p className="movie-genre">Genre, Year</p>
                    <p className="movie-name">Movie name</p>
                </div>
            </div>

            <div className="movie">
                <div className="movie-cover">
                    <img src="https://picsum.photos/164/240" alt="movie cover" />
                </div>
                <div className="movie-info">
                    <p className="movie-genre">Genre, Year</p>
                    <p className="movie-name">Movie name</p>
                </div>
            </div>

            <div className="movie">
                <div className="movie-cover">
                    <img src="https://picsum.photos/164/240" alt="movie cover" />
                </div>
                <div className="movie-info">
                    <p className="movie-genre">Genre, Year</p>
                    <p className="movie-name">Movie name</p>
                </div>
            </div>

            <div className="movie">
                <div className="movie-cover">
                    <img src="https://picsum.photos/164/240" alt="movie cover" />
                </div>
                <div className="movie-info">
                    <p className="movie-genre">Genre, Year</p>
                    <p className="movie-name">Movie name</p>
                </div>
            </div>

        </Carousel>
    );
}

export default CarouselLeft;