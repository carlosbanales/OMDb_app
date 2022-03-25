import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Modal from './Modal';
import MovieDetails from './MovieDetails';
import { getMoviesById } from './Utils';

// work on css
// add pagination

function MovieList({ movieResults }) {
  const [openModal, setOpenModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  let data = [];
  if (movieResults) {
    data = movieResults;
  }
  return (
    <div>
      { openModal ?
      <>
        <Modal>
          <MovieDetails 
            movie={currentMovie}
            setModal={setOpenModal}
          />
        </Modal>
      </>
      :
      <>
        {data.map((item) => (
          <MovieCard
            movie={item}
            key={item.imdbID}
            title={item.Title}
            type={item.Type}
            posterUrl={item.Poster}
            setModal={setOpenModal}
            setItem = {setCurrentMovie}
          />
        ))}
      </>
        }
    </div>
  )
};

export default MovieList;