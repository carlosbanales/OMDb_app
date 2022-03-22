import React, { useState } from 'react'
import MovieCard from './MovieCard';
import Modal from './Modal';

// work on css
// add pagination

function MovieList({ movieResults }) {
  const [openModal, setOpenModal] = useState(false);
  let data = [];
  if (movieResults) {
    data = movieResults;
  }
  return (
    <>
      { openModal && 
          <div>
            <Modal details={movieResults} />
          </div> }
      <div>
        {data.map((item) => (
          <MovieCard
            className="openModalButton"
            onClick={ () => { setOpenModal(true) } }
            key={item.imdbID}
            title={item.Title}
            type={item.Type}
            posterUrl={item.Poster}
          />
        ))}
      </div>
    </>
  )
};

export default MovieList;