import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(x=>(
        <div>
          <h3>{x.name}</h3>
            {x.movies.map(y=>(
              <ul>
                <li>{y}</li>
              </ul>
              ))}
        </div>
        ))}
    </div>
  );
}

export default Directors
