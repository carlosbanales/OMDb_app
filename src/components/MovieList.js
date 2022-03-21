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
            key={item.imdbID}
            title={item.Title}
            type={item.Type}
            posterUrl={item.Poster}
            onClick={ () => { setOpenModal(true) } }
          />
        ))}
      </div>
    </>
  )
};

export default MovieList;