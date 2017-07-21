import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            <p>Title: {movie.title}</p>
            <p>Time: {movie.time}</p>
            <p>Metascore: {movie.metascore}</p>
            <ul>Genres: {movie.genres.map(genre => <li>{genre}</li>)}</ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
