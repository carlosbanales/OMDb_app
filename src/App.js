import './App.css';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard.js';
import { getMoviesBySearchTerm } from './Utils.js';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchR, setsearchR] = useState([{}]);
  console.log("searchInput: " + searchInput);
  let promise = getMoviesBySearchTerm(searchInput);
  
  useEffect(() => {
    getApiInfo();
  }, []);

  const getApiInfo = () => {
    promise.then((result) => {
      console.log("result:"+result);
      setsearchR(result);
    })
  };

  console.log("searchR: "+searchR);

	return (
	  <div className='App'>
         Enter Search
        {/* uncontrolled input, need to create a form component */}
        <input type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button> Enter </button>

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



// promiseVar.then(result => {
//   console.log(result);
//   return result;
// })
// .catch(err => console.log(err)
// );