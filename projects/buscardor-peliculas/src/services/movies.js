const API_KEY = '20663a6'
const API_SEARCH_DATA = `https://www.omdbapi.com/?apikey=${API_KEY}`

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const respuesta = await fetch(`${API_SEARCH_DATA}&s=${search}`)
    const json = await respuesta.json()
    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      type: movie.Type

    }))
  } catch (error) {
    throw new Error('Error en la busqueda')
  }
}

const API_DISCOVERY = 'https://api.themoviedb.org/3'

export function getDiscovery (path) {
  return fetch(API_DISCOVERY + path, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs',
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then((result) => result.json())
}

export const discoveryMovies = async (page) => {
  // if (search === '') return null

  try {
    const respuesta = await (getDiscovery(`/discover/movie?page=${page}`))
    console.log(respuesta)
    const movies = respuesta.results
    if (respuesta?.results) {
      return movies?.map(movie => ({
        id: movie?.imdbID,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w${300}/${movie.poster_path}`,
        year: movie?.release_date ? movie?.release_date?.substring(0, 4) : ' Sin Informacion de Estreno'
        // type: movie.Type

      }))
    }
  } catch (error) {
    console.log(error)
    throw new Error('Error en la busqueda')
  }
}
