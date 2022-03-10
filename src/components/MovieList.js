import React from 'react'
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

function MovieList({ results }) {
  let data = [];
  if (results) {
    data = results || [];
  }
  console.log(data);
  return (
    <div>
      <MovieCard />
      <MovieDetails />
    </div>
  )
};

export default MovieList;