import React, { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
import './Filters.css'
export const Filters = () => {
  const { filters, setFilters } = useFilter()
  // NO USAR DOS FUENTES DE LA VERDAD!!! const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    // setMinPrice(e.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value

    }))
  }
  const handleChangeCategory = (e) => {
    // changeFilters(prevState => ({
    //   ...prevState,
    //   category: e.target.value
    // }))
    setFilters(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio minimo</label>
        <input name='price' type='range' id={minPriceFilterId} min='0' max='2000' onChange={handleChangeMinPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select name='category' id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Notebooks</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
