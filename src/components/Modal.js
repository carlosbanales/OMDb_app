import React from 'react';
import MovieDetails from './MovieDetails';

function Modal(props) {
  return (
    <div>
      <MovieDetails 
        posterUrl={props.PosterUrl}
        title={props.Title}
        rated={props.Rated}
      />
    </div>
  );
}

export default Modal;