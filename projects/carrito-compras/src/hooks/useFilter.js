import { useContext } from 'react'
import { FiltersContext } from '../contex/filter'

export const useFilter = () => {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(prod => {
      return (
        prod.price >= filters.minPrice && (
          filters.category === 'all' ||
            prod.category === filters.category
        )
      )
    })
  }
  return { filters, filterProducts, setFilters }
}
