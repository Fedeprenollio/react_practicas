import { useCart } from '../hooks/useCart'
import './Footer.css'

export const Footer = () => {
  const { cart } = useCart()
  console.log(cart)
  return (
    <div className='footer' />
  )
}
