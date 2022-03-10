import React from 'react'
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

function MovieList({ movieResults }) {
  let data = [];
  if (movieResults) {
    data = movieResults;
  }
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <MovieCard 
          key = {item.imdbID}
          movie = {item}
          title = {item.Title}
          type = {item.Type}
          posterUrl = {item.Poster}
        />
      ))}
    </div>
  )
};

export default MovieList;