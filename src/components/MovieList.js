import React, { useState } from 'react'
import MovieCard from './MovieCard';
import Modal from './Modal';
import MovieDetails from './MovieDetails';

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
          <button onClick={() => {setOpenModal(false)}}>X</button>
          <MovieDetails 
            posterUrl={data[0].Poster}
            title={data[0].Title}
            rated={data[0].Rated}
          />
        </Modal>
      </>
      :
      <>
        {data.map((item) => (
          <MovieCard
            key={item.imdbID}
            title={item.Title}
            type={item.Type}
            posterUrl={item.Poster}
            setModal={setOpenModal}
          />
        ))}
      </>
        }
    </div>
  )
};

export default MovieList;