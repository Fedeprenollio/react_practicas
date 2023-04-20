import { useEffect, useState } from 'react'
import { products as inicialProducts } from '../mocks/products.json'

export function useCategories () {
  const [allCategories, setAllCategories] = useState([])
  useEffect(() => {
    const allCategoriesSet = new Set(inicialProducts.map(item => item.category))

    setAllCategories(Array.from(allCategoriesSet))
  }, [])
  return { allCategories }
}
        