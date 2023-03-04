import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    // if (search.startsWith('  ')) {
    //   setSearch(search.slice(1))
    //   // setError('No puede comenzar con un espacio')
    //   return
    // }
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search.length === '') {
      setError('No puede estar vacio')
      return
    }
    if (search.length < 3) {
      setError('Debes color al menos tres caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
