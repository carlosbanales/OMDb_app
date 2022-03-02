import React from 'react';

function MovieCard(props) {
    return (
        <div className='MovieCard'>
            <img className="MovieImage" src={props.posterUrl} />
            <p className="MovieTitle">{props.title}</p>
            <div className="MTContainer">
                <p className="MovieType">{props.type}</p>
            </div>
        </div>
    )
};

export default MovieCard;