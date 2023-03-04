import React from 'react'

const ListOfMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {movies?.map(({ title, id, year, poster, type }) => {
        return (
          <li className='movie' key={id}>
            <h3>{title}</h3>
            <span>{type}</span>
            <h4>{year}</h4>
            <img src={poster} alt={`Imagen de ${title}`} />
          </li>
        )
      })}
    </ul>

  )
}

const NoMoviesResoult = () => {
  return (
    <p>No hay resultados para mostrar</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResoult />

  )
}
