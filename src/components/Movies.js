import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((data) => {
          return(
            <div> {data.title}, movies: {data.time}, {data.genres}, {data.metascore}</div>
          )
        })}
    </div>
  );
};

export default Movies;
