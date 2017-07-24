import React from 'react'
import { movies } from '../data'

const Movie = ({title, time, genres}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{time}</h2>
      <ul>
        {genres.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(Movie)}
    </div>
  )
}

export default Movies
