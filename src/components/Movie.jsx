import React from 'react';

const Movie = ({ movie }) => {
    console.log("recibo" + movie)
    return (
        <div className="movie">
            <div className="movie-cover">
                <img src={movie.cover} alt="movie cover" />
            </div>
            <div className="movie-info">
                <p className="movie-genre">{movie.genre}, {movie.year}</p>
                <p className="movie-name">{movie.title}</p>
            </div>
        </div>
    );
}

export default Movie;