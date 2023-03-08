import { createContext, useState } from 'react'

// 1º crear contexte
export const FiltersContext = createContext()

// 2ª crear el provider para proveer el contexto
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    > {children}
    </FiltersContext.Provider>
  )
}
