/* eslint-disable react/react-in-jsx-scope */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { UsersList } from './components/UsersList'

export const SortBy = {
  NONE: 'none',
  NAME: 'name',
  LAST: 'last',
  COUNTRY: 'country'

}

function App () {
  const [users, setUsers] = useState([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState(null)
  const originalUsers = useRef([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
      .catch(error => console.error(error))
  }, [])

  const handleChangeSort = (sort) => {
    setSorting(sort)
  }

  const toogleColors = () => {
    setShowColors(!showColors)
  }
  const toogleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
    // setSorting(prevState => !prevState)
  }

  const handleDeleteUser = (uuid) => {
    const newList = users.filter(user => user.login.uuid !== uuid)
    setUsers(newList)
  }
  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleFilterCountries = (e) => {
    const value = e.target.value
    setFilterCountry(value)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry?.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  // MODO INCORRECTO PORQUE SORT DEVUELVE UN NUEVO ARRAY, MUTA EL ORIGNAL
  // const sortedUsersByCountry = sortByCountry
  //   ? users.sort((a, b) => {
  //     return a.location.country.localeCompare(b.location.country)
  //   })
  //   : users

  // ES BUENA OPCION; ÞERO HACE UNA COPIA PROFUNDA CON EL STRUCTURECLONE
  // const sortedUsersByCountry = sortByCountry
  //   ? structuredClone(users).sort((a, b) => {
  //     return a.location.country.localeCompare(b.location.country)
  //   })
  //   : users

  // const sortedUsersByCountry = sortByCountry
  //   ? [...users].sort((a, b) => {
  //       return a.location.country.localeCompare(b.location.country)
  //     })
  //   : users

  // MODO CORRECTO
  // A DIFERENCIA DEL SORT, TOSORTED no muta el array original
  // const sortedUsersByCountry = sortByCountry
  //   ? filteredUsers.toSorted((a, b) => {
  //     return a.location.country.localeCompare(b.location.country)
  //   })
  //   : users

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers
    if (sorting === SortBy.COUNTRY) {
      return filteredUsers.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    }
    if (sorting === SortBy.NAME) {
      return filteredUsers.toSorted((a, b) => {
        return a.name.first.localeCompare(b.name.first)
      })
    }
    if (sorting === SortBy.LAST) {
      return filteredUsers.toSorted((a, b) => {
        return a.name.last.localeCompare(b.name.last)
      })
    }
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>Buscador de usuarios</h1>
      <header>
        <button onClick={toogleColors}>Colorear filas</button>
        <button onClick={toogleSortByCountry}>{sorting === SortBy.COUNTRY ? 'No ordenar por pais' : 'Ordenar por pais'}</button>
        <button onClick={handleReset}>Restaurar lista original</button>
        <input placeholder='Escribe un pais' onChange={handleFilterCountries} type='search' />
      </header>
      <main>
        <UsersList changeSorting={handleChangeSort} handleDeleteUser={handleDeleteUser} showColors={showColors} users={sortedUsers} />
      </main>
    </>
  )
}

export default App
