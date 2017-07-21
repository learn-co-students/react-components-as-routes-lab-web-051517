import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(function(movie) {
          return (
            <div>
              <h2>{movie.title}</h2>
              <p>Length: {movie.time}  minutes</p>
              Genre:
              <ul>
                {movie.genres.map(function(genre) {
                  return <li>{genre}</li>
                })}
              </ul>
              <br />
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
