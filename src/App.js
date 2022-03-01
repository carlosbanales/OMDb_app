import './App.css';
import React from 'react';
import MovieCard from './MovieCard.js';
import {searchResults, getMoviesBySearchTerm, movieData } from './Utils.js';

// let searchInput = React.createRef();
// console.log(searchInput);

getMoviesBySearchTerm("cars");

function App() {
	return (
		  <div className='App'>
        <label>
          Enter Search
          <input type="text" name="sInput" />
          <button> Enter</button>
        </label>
        <MovieCard
          title = {searchResults.Title}
          type = {movieData.Type}
          posterUrl = {movieData.Poster}
        />
		  </div>
    )
};

export default App;