import React, { useRef } from 'react';
import playButton from '../assets/images/icons/play_button.png';
import featuredVideo from '../assets/videos/featured.mp4';

const FeaturedVideo = () => {

    const videoRef = useRef();
    
    const handleVideo = () => {
        if(videoRef.current.paused === true) {
            videoRef.current.play();
            videoRef.current.parentElement.children[3].classList.toggle("hide");
            videoRef.current.parentElement.children[2].classList.toggle("hide");
        } else {
            videoRef.current.pause();
            videoRef.current.parentElement.children[3].classList.toggle("hide");
            videoRef.current.parentElement.children[2].classList.toggle("hide");
        }
        
    }

    return (
        <div className="featured-video-container">
            <video loop muted ref={videoRef}>
                <source src={featuredVideo} type="video/mp4" />
            </video>
            <div className="featured-video-cover"></div>
            <div className="featured-video-title">
                <h1>Big Comeback</h1>
                <p>Laboris est reprehenderit ea nulla id amet irure ad do labore. Laborum voluptate eu est elit adipisicing officia ex et nulla ullamco sit amet magna non. Cupidatat anim sunt ipsum exercitation mollit minim Lorem sint.</p>
                <div className="featured-video-buttons-container">
                    <button className="featured-video-buttons primary">WATCH NOW</button>
                    <button className="featured-video-buttons">+ PLAYLIST</button>
                </div>
            </div>
            <img src={playButton} alt="play button" onClick={handleVideo} />
        </div>
    );
}

export default FeaturedVideo;