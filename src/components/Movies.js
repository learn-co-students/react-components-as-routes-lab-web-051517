import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m=>(
          <div>
            {m.title}<br/>
            {parseInt(m.time)}<br/>
            <ul>{m.genres.map((i)=>(<li>{i}</li>))}</ul>
            {m.metascore ? m.metascore : null}<br/>
          </div>
        ))}
    </div>
  );
};

export default Movies;
