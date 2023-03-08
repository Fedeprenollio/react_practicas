import { useContext } from 'react'
import { CartContext } from '../contex/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart  debe ser usado en un  CartProvider')
  }
  return context
}
