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

  // look into why when I use setMovies(result) won't work
  useEffect(() => {
    setIsLoading(true);
    getData(searchTerm);
    // this is here to show on screen that loading is working the way it should
  }, [searchTerm]);

  const getData = async(Term) => {
    try {
      let response = await getMoviesBySearchTerm(Term);
      console.log(response);
      setMovies(response);
      setError();
    } catch (error) {
      setError('Error')
    }
    setIsLoading(false);
  };

  if (error) return "Error!";

	return (
	  <div className='App'>
      Enter Search
      <SearchBar setInput={getInput} />
      {
        isLoading === true ? <div> ...loading </div> :
        <div>
          <MovieList movieResults={movies} />
        </div>
      }
    </div>
  )
};

export default App;