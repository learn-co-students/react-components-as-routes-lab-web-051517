import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

const Actor = ({name,movies}) => {
  return (
    <div className='actor'>
      <h2>{name}</h2>
      <p>Movies:</p>
      <ul>
        {movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

export default Actors;
