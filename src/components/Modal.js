import React from 'react';
import MovieDetails from './MovieDetails';

function Modal(props) {
  const {details, closeModal} = props;
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => {closeModal(false)}}>X</button>
        <MovieDetails 
          posterUrl={details.PosterUrl}
          title={details.Title}
          rated={details.Rated}
        />
      </div>
    </div>
  );
}

export default Modal;