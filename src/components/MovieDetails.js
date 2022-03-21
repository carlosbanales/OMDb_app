import React from 'react'


// need to pass movieDetails to module for when the movie card is clicked Day2 assignment
function MovieDetails(props) {
  return (
    <div className="MovieDetails">
      <img className="MovieImage" src={props.posterurl} />
      <h2 className="Title">{props.title}</h2>
      <div className="GreyContainer">
        <p className="Rated">{props.rated}</p>
      </div>
      <div className="GreyContainer">
        <p className="Runtime">{props.runtime}</p>
      </div>
      <div className="GreyContainer">
        <p className="Genre">{props.genre}</p>
      </div>
    </div>
  )
};

export default MovieDetails;