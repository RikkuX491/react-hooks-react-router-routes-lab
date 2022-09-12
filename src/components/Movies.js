import React from "react";
import { movies } from "../data";

function Movies() {

  const movieInfo = movies.map(movie => {

    const genreElements = movie.genres.map(genre => {
      return <li key={genre}>{genre}</li>
    })
  
    return (
      <div key={movie.title}>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {genreElements}
        </ul>
      </div>
    );
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieInfo}
    </div>
  );
}

export default Movies;
