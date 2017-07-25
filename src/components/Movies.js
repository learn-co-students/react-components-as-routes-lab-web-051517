import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
            <h3>Name: {movie.title}</h3>
            <h5>Time: {movie.time}</h5>
            <h5>Genres: {movie.genres}</h5>
          </div>
        ))}
      }
    </div>
  );
};

export default Movies;
