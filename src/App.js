import './App.css';
import React, { useEffect, useState } from 'react';
import { getMoviesBySearchTerm } from './components/Utils';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [list, setList] = useState([]);

  const getSearchResults = async(searchInput) => {
    const promise = getMoviesBySearchTerm(searchInput);
    const movies = await promise.then((result) => {
      return result;
    });
  
    setList(prevState => {
      return {...prevState, movies:movies}
    })
  };

  // useEffect(() => {
  //   getSearchResults();
  // }, [getSearchResults()]);

	return (
	  <div className='App'>
      Enter Search
      <div>
          <SearchBar searchResults={getSearchResults} />
          <MovieList movieResults={list.movies} />
      </div>
    </div>

  )
};

export default App;