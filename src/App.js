import './App.css';
import React, { useEffect, useState } from 'react';
import { getMoviesBySearchTerm } from './components/Utils';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [results, setResults] = useState([]);

  const getResults = async(searchInput) => {
    const promise = getMoviesBySearchTerm(searchInput);
    const movies = await promise.then((result) => {
      return result;
    });
  
    setResults(prevState => {
      return {...prevState, movies:movies}
    })
  };

	return (
	  <div className='App'>
      Enter Search
      <div>
          <SearchBar getResults={getResults} />
          <MovieList results={results.movies} />
      </div>
    </div>

  )
};

export default App;



// promiseVar.then(result => {
//   console.log(result);
//   return result;
// })
// .catch(err => console.log(err)
// );