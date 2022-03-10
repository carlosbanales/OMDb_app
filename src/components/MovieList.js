import React from 'react'
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

function MovieList({ movieResults }) {
  let data = [];
  if (movieResults) {
    data = movieResults || [];
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