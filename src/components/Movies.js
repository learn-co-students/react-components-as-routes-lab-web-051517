import React from 'react';
import { movies } from '../data';

const Movie = ({ title, time, genres, metascore }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Time: {time}</p>
      <p>Genres:</p>
      <ul>
        {genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return <Movie
          title={movie.title}
          time={movie.time}
          genres={movie.genres}
          metascore={movie.metascore}
        />
      })}
    </div>
  );
};

export default Movies;
