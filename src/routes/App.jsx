import React, { useRef } from 'react';
import '../styles/App.css';
import playButton from '../assets/images/icons/play_button.png';
import featuredVideo from '../assets/videos/featured.mp4';
import leftButtonActive from '../assets/images/icons/left_active.png';
import rightButtonActive from '../assets/images/icons/right_active.png';
import leftButtonInactive from '../assets/images/icons/left_inactive.png';
import rightButtonInactive from '../assets/images/icons/right_inactive.png';

function App() {

  const videoRef = useRef();

  const handleVideo = () => {
    videoRef.current.play();
    // Hide play button
    //videoRef.current.parentElement.querySelector('img').style.visibility = 'hidden';
  }

  return (
    <div className="App">
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



      <div className="movies-menu-container">
        <div className="menu-container">
          <span className="menu-item selected">Today</span>
          <span className="menu-item separator">/</span>
          <span className="menu-item">This week</span>
          <span className="menu-item separator">/</span>
          <span className="menu-item">Last 30 days</span>
        </div>
      </div>

      <div className="movies-carousel">
        <div className="movies-container">

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
        </div>


        <div className="movies-carousel-header">
          <p className="header-title">Action & Drama Movies</p>
          <div className="movies-carousel-buttons-container">
            <img src={leftButtonInactive} alt="Left arrow" />
            <img src={rightButtonActive} alt="Right arrow" />
          </div>
          <div className="line"></div>
          <p className="view">VIEW ALL +</p>
        </div>


      </div>

    </div>
  );
}

export default App;
