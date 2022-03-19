import './App.css';
import React, { useEffect, useState } from 'react';
import { getMoviesBySearchTerm } from './components/Utils';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // why didn't it work to pass setSearchTerm the the search bar prop
  const getInput = (input) => {
    setSearchTerm(input);
  };

  // look into why when I use setMovies(result) won't work
  useEffect(() => {
    const fetchData = async() => {
      const promise = getMoviesBySearchTerm(searchTerm);
      const data = await promise.then((result) => {
        return result;
      });
      setMovies({data});
    }
    fetchData();
    // do I need to set movies to an empty array? does it matter in data is undefined?
    movies !== [] && setIsLoading(false);
    console.log(movies);
  }, [searchTerm]);

	return (
	  <div className='App'>
      Enter Search
      <SearchBar setInput={getInput} />
      {
        isLoading === true ? <div> ...loading </div> :
        <div>
          <MovieList movieResults={movies.data} />
        </div>
      }
    </div>
  )
};

export default App;