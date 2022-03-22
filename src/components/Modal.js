import React from 'react';
import MovieDetails from './MovieDetails';

function Modal({details}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button> X </button>
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