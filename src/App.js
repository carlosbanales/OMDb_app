import './App.css';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard.js';
import { getMoviesBySearchTerm } from './Utils.js';

function App() {
  const [searchInput, setSearchInput] = useState("");
  let searchR = getMoviesBySearchTerm(searchInput);
  console.log(searchR);

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
      {searchR[0] && (
        <div>
          <MovieCard
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
          />
          </div>
      )}
    </div>
  )
};

export default App;