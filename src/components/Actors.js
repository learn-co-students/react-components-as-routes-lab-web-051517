import React from 'react';
import { actors } from '../data';

const Actors = props => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => (
      <div>
        {a.name}
        <ul>{a.movies.map(i=>(<li>{i}</li>))}</ul>
      </div>
      ))}
    </div>
  );
};

export default Actors;
