const API_KEY = '20663a6'
const API_SEARCH_DATA = `http://www.omdbapi.com/?apikey=${API_KEY}`

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
