import React, { useEffect, useState } from 'react'
import { getMoviesById } from './Utils';

// fix bug that happens when you searh another movie
// while the Modal is open, need to close Modal when the search Term is changed

function MovieDetails({movie, setModal}) {
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function getDetails(id) {
    try{
      const promise = await getMoviesById(id);
      setMovieInfo(promise);
      setIsLoading(false);
    } catch(error) {
      console.log(error)
    }
  };

  useEffect(() => {
    setIsLoading(true);
    movie && getDetails(movie.imdbID);
  }, [movie]);

  return (
    <>
      { isLoading === true ? <div> loading ... </div> :
        <div className="MovieDetails">
          <button onClick={() => {setModal(false)}}>X</button>
          <h2 className="Title">{movieInfo.Title}</h2>
          <img className="MovieImage" alt="Poster" src={movieInfo.Poster} />
          <div className="GreyContainer">
            <p className="Rated">{movieInfo.Rated}</p>
          </div>
          <div className="GreyContainer">
            <p className="Runtime">{movieInfo.Runtime}</p>
          </div>
          <div className="GreyContainer">
            <p className="Genre">{movieInfo.Genre}</p>
          </div>
        </div> }
    </>
    )
};

export default MovieDetails;