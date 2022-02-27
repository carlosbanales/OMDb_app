import './App.css';
import MovieCard from './MovieCard.js';
import { movieData } from './Utils.js';

const movie = "cars";

function App() {
	return (
		  <div className='App'>
        <MovieCard 
          title = {movieData.Title}
          type = {movieData.Type}
          posterUrl = {movieData.Poster}
        />
		  </div>
    )
};

export default App;
