import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsInfo = directors.map(director => {

    const movieElements = director.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })
  
    return (
      <div key={director.name}>
        <p>{director.name}</p>
        {movieElements}
      </div>
    );
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsInfo}
    </div>
  );
}

export default Directors;
