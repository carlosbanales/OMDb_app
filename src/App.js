import './App.css';
import React, { useEffect, useState } from 'react';
import { getMoviesBySearchTerm } from './components/Utils';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // why didn't it work to pass setSearchTerm the the search bar prop
  const getInput = (input) => {
    setSearchTerm(input);
  };

  async function getData(sTerm) {
    try {
      let response = await getMoviesBySearchTerm(sTerm);
      setMovies(response.Search);
      // when uncommented I get an error at intial render? throws an error when the request address
      // if (!response.ok)
      //   throw Error(response.Error);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    searchTerm !== '' ? getData(searchTerm): setMovies([]);
    setIsLoading(false);
  }, [searchTerm]);

	return (
	  <div className='App'>
      Enter Search
      <SearchBar setInput={getInput} />
      { error && <div> ...error :( </div>}
      {/* if isLoading ends up false everytime why dont I get empty list elements ?? */}
      { isLoading === true ? <div> ...loading </div> :
        <div>
          <MovieList movieResults={movies} />
        </div> }
    </div>
  )
};

export default App;