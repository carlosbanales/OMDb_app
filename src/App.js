import './App.css';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard.js';
import { getMoviesBySearchTerm } from './Utils.js';

// let searchInput = React.createRef();
// console.log(searchInput);


function App() {
  const [searchInput, setSearchInput] =  useState("");
  let searchR = getMoviesBySearchTerm(searchInput);
  console.log(searchR);

  useEffect(() => {
    console.log(searchR);
  })

	return (
		  <div className='App'>
        <label>
          Enter Search
          <input type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button> Enter </button>
        </label>
          {/* <MovieCard
            title = {searchR[0].Title}
            type = {searchR[0].Type}
            posterUrl = {searchR[0].Poster}
          />
          <MovieCard
            title = {searchR[1].Title}
            type = {searchR[1].Type}
            posterUrl = {searchR[1].Poster}
          />
          <MovieCard
            title = {searchR[2].Title}
            type = {searchR[2].Type}
            posterUrl = {searchR[2].Poster}
          /> */}
		  </div>
    )
};

export default App;