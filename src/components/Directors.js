import React from 'react';
import { directors } from '../data';

const Director = ({ name, movies }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Movies:</p>
      <ul>
        {movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return <Director
          name={director.name}
          movies={director.movies}
        />
      })}
    </div>
  );
}

export default Directors
