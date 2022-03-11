import React from 'react'
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

// add useEffect
// learn more about keys and map
// import MovieDetails component
// work on css
// add pagination

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
          title = {item.Title}
          type = {item.Type}
          posterUrl = {item.Poster}
        />
      ))}
    </div>
  )
};

export default MovieList;