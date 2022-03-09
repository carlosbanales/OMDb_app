import './App.css';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard.js';
import MovieDetails from './MovieDetails.js';
import { getMoviesBySearchTerm } from './Utils.js';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [movieList, setMovieList] = useState([]);

  async function getResults() {
    let promise = getMoviesBySearchTerm(searchInput);
    await promise.then((result) => {
      setMovieList(result);
    });
  };

  useEffect(() => {
    console.log(`SearchInput: ${searchInput}`);
  }, [searchInput]);

  function handleSubmit(e) {
    e.preventDefault();
    getResults();

  }

	return (
	  <div className='App'>
      Enter Search
      <form>
        <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        <button onClick={handleSubmit} > Enter </button>
      </form>
      <div>
        {movieList.length}
      </div>
      <div>
        {/* <MovieCard
          title = {movieList[0].Title}
          type = {movieList[0].Type}
          posterUrl = {movieList[0].Poster}
        />
        <MovieDetails /> */}
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