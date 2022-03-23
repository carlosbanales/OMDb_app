import React from 'react';

function MovieCard(props) {
  const {setModal, setItem, movie} = props;
  return (
    <div className='MovieCard' onClick={ () => {setModal(true); setItem(movie);} }>
        <img className="MovieImage" src={props.posterUrl} />
        <p className="MovieTitle">{props.title}</p>
        <div className="MTContainer">
            <p className="MovieType">{props.type}</p>
        </div>
    </div>
    
  )
};

export default MovieCard;