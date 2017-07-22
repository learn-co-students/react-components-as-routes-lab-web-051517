import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {directors.map((data) => {
        return(
          <div> {data.name}, movies: {data.movies}</div>
        )
      })}
    </div>
  );
}

export default Directors
