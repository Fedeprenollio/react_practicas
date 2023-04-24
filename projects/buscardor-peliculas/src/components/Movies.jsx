import React from 'react'

const ListOfMovies = ({ movies }) => {
  const IMG_NOT_FOUND = 'https://ih1.redbubble.net/image.1861329650.2941/fposter,small,wall_texture,product,750x1000.jpg'

  return (
    <ul className='movies'>
      {movies?.map(({ title, id, year, poster, type }) => {
        return (
          <li className='movie' key={id || title}>
            <img src={poster === 'N/A' ? IMG_NOT_FOUND : poster} alt={`Imagen de ${title}`} />
            <h3>{title}</h3>
            <span>{type}</span>
            <h4>{year}</h4>
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
