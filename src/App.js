import './App.css';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard.js';
import MovieDetails from './MovieDetails.js';
import { getMoviesBySearchTerm } from './Utils.js';

function App() {
  const [searchInput, setSearchInput] = useState('');

  let promise = getMoviesBySearchTerm(searchInput);
  console.log("promise: "+ promise);

  let searchResults = promise.then((result) => {
    console.log("result: " + result);
    return result;
  });

  // console.log("searchResults: " + searchResults);

	return (
	  <div className='App'>
      Enter Search
      {/* uncontrolled input, need to create a form component */}
      <input type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button> Enter </button>
      { searchResults[0] !== undefined && (
        <div>
          <MovieCard
            title = {searchResults[0].Title}
            type = {searchResults[0].Type}
            posterUrl = {searchResults[0].Poster}
          />
          <MovieDetails />
        </div>
      )}
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