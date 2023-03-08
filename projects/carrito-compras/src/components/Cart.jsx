import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

const CartItem = ({ thumbnail, price, title, quantity, addToCart, deducToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title} </strong> ${price}
      </div>
      <footer>
        <small>
          Cantidad: {quantity}
        </small>
        <button onClick={() => deducToCart()}> - </button>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export const Cart = () => {
  const cartCheckBoxID = useId()
  const { cart, clearCart, addToCart, deducToCart } = useCart()
  return (
    <div>
      <label className='cart-button' htmlFor={cartCheckBoxID}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxID} hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => {
            return <CartItem key={product.id} {...product} deducToCart={() => deducToCart(product)} addToCart={() => addToCart(product)} />
          })}

        </ul>
        <button onClick={() => clearCart()}><ClearCartIcon /></button>

      </aside>
    </div>
  )
}
