import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map(Movie) }
    </div>
  );
};

const Movie = ( {title, time, genres, metascore} ) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Time: {time}</p>
      { metascore &&
        <p>Metascore: {metascore}</p>
      }

      <p>Genres:</p>
      <ul>
        {genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  )
}

export default Movies;
