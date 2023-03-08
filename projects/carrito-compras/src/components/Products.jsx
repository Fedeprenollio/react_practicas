import React, { useContext } from 'react'
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { CartContext } from '../contex/cart'

export const Products = ({ products }) => {
  const { addToCart, cart, removeToCart } = useContext(CartContext)

  const checkProductInCart = product => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.thumbnail} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button style={{ background: isProductInCart ? 'red' : '#09f' }} onClick={() => isProductInCart ? removeToCart(product) : addToCart(product)}> {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />} </button>
                {/* <button onClick={() => removeToCart(product)}><RemoveFromCartIcon /></button> */}
              </div>

            </li>
          )
        })}
      </ul>

    </main>
  )
}
