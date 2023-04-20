import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import useMovies from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'
import { ButtonRadio } from './components/ButtonRadio'
import { useObserver } from './hooks/useObserver'
import { useScrollToTop } from './hooks/useScrollToTop'

function App () {
  useScrollToTop()
  const [sort, setSort] = useState(false)
  const [sortYear, setSortYear] = useState(false)
  const { page, elementRef } = useObserver({ distance: '10px' })
  // para el form no controlado usamos el useRef()
  const inputRef = useRef('')
  // ----- para el form controlado:

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading, errorSearch } = useMovies({ search, sort, sortYear, page })
  // ------

  const handleSubmit = (e) => {
    e.preventDefault()
    // DE FORMA NO CONTROLADA PUEDE SER CON EL USEREF O DE FORMA NATIVA
    // const text = inputRef.current.value
    // console.log(text)
    // -------------
    // De forma nativa de JS:
    //* * * para un solo input:
    // const fields1 = new window.FormData(e.target)
    // const title = fields1.get('title')
    // console.log(title)
    // ------------------------
    //* * * para multiples input:
    // const fields2 = Object.fromEntries(new window.FormData(e.target))
    // console.log(fields2)

    // De forma controlada es con el use de un estado con el useSTATE y le ponemos al input el value={state}
    // y tambien ponemos el onchange===>esta forma es mejor para validar pero en formularios muy grandes suele ponerse lento;
    // se puede validar con un useEfect o dentro del handleChange
    // ----------------
    getMovies({ search })
  }

  const debounceGetMovies = useCallback(

    debounce(search => {
      getMovies({ search })
    }, 500),
    [getMovies])

  const handleChange = (e) => {
    const newQuery = e.target.value
    setSearch(newQuery)
    if (newQuery.length < 3) return
    debounceGetMovies(newQuery)
    // getMovies({ search: newQuery })
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <input onChange={handleChange} value={search} name='title' ref={inputRef} type='search' placeholder='Avenger, Terminator, The Matrix...' />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {errorSearch && <p style={{ color: 'red' }}>{errorSearch}</p>}
          </div>
          <button type='submit'>Buscar</button>
        </form>
        <ButtonRadio movies={movies} setSort={setSort} setSortYear={setSortYear} sort={sort} sortYear={sortYear} />
      </header>
      <main>
        {!loading ? <Movies movies={movies} /> : 'Cargando...'}
      </main>
      <div className='lazzy' ref={elementRef} />
    </div>
  )
}

export default App
