import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map(Director) }
    </div>
  );
}

const Director = ( {name, movies} ) => {
  return (
    <div>
      <h3>{ name }</h3>
      <ul>
        { movies.map(movie => <li>{movie}</li>) }
      </ul>
    </div>
  )
}

export default Directors
