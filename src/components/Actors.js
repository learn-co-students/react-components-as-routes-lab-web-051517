import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
      {actors.map((data) => {
        return(
          <div> {data.name}, movies: {data.movies}</div>
        )
      })}
    </div>
  );
};

export default Actors;
