import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsInfo = actors.map(actor => {

    const movieElements = actor.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return (
      <div key={actor.name}>
        <p>{actor.name}</p>
        <ul>
          {movieElements}
        </ul>
      </div>
    );
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsInfo}
    </div>
  );
}

export default Actors;
