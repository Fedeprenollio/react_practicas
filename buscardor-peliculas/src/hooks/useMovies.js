import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'
// import whitResoult from '../data/info.json'
// import noData from '../data/no-data.json'

const useMovies = ({ search, sort, sortYear }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorSearch, setErrorSearch] = useState(null)
  const prevSearchRef = useRef(null)

  const getMovies = useCallback(async ({ search }) => {
    if (prevSearchRef.current === search) return

    try {
      setLoading(true)
      setErrorSearch(null)
      prevSearchRef.current = search
      const newMovies = await searchMovies({ search })

      setMovies(newMovies)
    } catch (error) {
      setErrorSearch(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // const getSortedMovies = () => {
  //   console.log("RENDER FUNCION NORAML")
  //   if (sort) {
  //     const sortMoviesName = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  //     return sortMoviesName
  //   } else if (sortYear) {
  //     const sortMoviesYear = sortYear ? [...movies].sort((a, b) => a.year - b.year) : movies
  //     return sortMoviesYear
  //   } else {
  //     return movies
  //   }
  // }

  const getSortedMovies = useMemo(() => {
    if (sort) {
      const sortMoviesName = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
      return sortMoviesName
    } else if (sortYear) {
      const sortMoviesYear = sortYear ? [...movies].sort((a, b) => a.year - b.year) : movies
      return sortMoviesYear
    } else {
      return movies
    }
  }, [movies, sort, sortYear])

  return { movies: getSortedMovies, getMovies, loading, errorSearch }
}

export default useMovies
