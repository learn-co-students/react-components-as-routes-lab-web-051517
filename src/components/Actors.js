import React from 'react';
import { actors } from '../data';

const Actor = ({ name, movies }) => {
  return (
    <div className='actor'>
      <h2>Name: {name}</h2>
      <p>Movies:</p>
      <ul>
        {movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <Actor
          name={actor.name}
          movies={actor.movies}
        />
      })}
    </div>
  );
};

export default Actors;
