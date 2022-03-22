import React from 'react';

function MovieCard({ movieData }) {
    return (
        <div className='MovieCard' onClick={ () => { movieData(true) } }>
            <img className="MovieImage" src={movieData.posterUrl} />
            <p className="MovieTitle">{movieData.title}</p>
            <div className="MTContainer">
                <p className="MovieType">{movieData.type}</p>
            </div>
        </div>
    )
};

export default MovieCard;