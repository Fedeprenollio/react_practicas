import React from 'react'

export const ButtonRadio = ({ movies, setSort, setSortYear, sort, sortYear }) => {
  const hasMovies = movies?.length > 0
  const handleSort = () => {
    setSort(!sort)
    setSortYear(false)
  }
  const handleSortYear = () => {
    setSortYear(!sortYear)
    setSort(false)
  }
  const handleSortDefault = () => {
    setSortYear(false)
    setSort(false)
  }
  return (hasMovies && (
    <div className='radios'>
      <span>Ordenar por:</span>
      <input name='sort' type='radio' onChange={handleSort} value={sort} />
      <label>Nombre</label>
      <input name='sort' type='radio' onChange={handleSortYear} value={sortYear} />
      <label>Año</label>
      <input name='sort' type='radio' onChange={handleSortDefault} value={sortYear} />
      <label>Default</label>
    </div>))
}
