import { createContext, useReducer } from 'react'
import { cartInicialState, cartReducer } from './reducers/cart'

export const CartContext = createContext()

const useCartProvider = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInicialState)

  const addToCart = (product) => {
    return (
      dispatch({
        type: 'ADD_TO_CART',
        payload: product
      })
    )
  }
  const deducToCart = (product) => {
    return (
      dispatch({
        type: 'DEDUC_FROM_CART',
        payload: product
      })
    )
  }

  const removeToCart = (product) => {
    return (
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
      })
    )
  }
  const clearCart = () => {
    return (
      dispatch({
        type: 'CLEAR_THE_CART'
      })
    )
  }

  return { state, deducToCart, addToCart, removeToCart, clearCart }
}

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([])
  // const addToCart = (product) => {
  //   console.log(product)
  //   // chequear si ya esta en el carrito el producto
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)
  //   if (productInCartIndex >= 0) {
  //     // Forma 1 usando STRUCTURECLONE
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }
  //   // Producto no esta en el carrito
  //   setCart((prevState) => {
  //     return (
  //       [...prevState,
  //         {
  //           ...product,
  //           quantity: 1
  //         }]
  //     )
  //   })
  // }

  // const removeToCart = (product) => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }
  // const clearCart = () => {
  //   setCart([])
  // }

  const { addToCart, deducToCart, clearCart, removeToCart, state } = useCartProvider()

  return (
    <CartContext.Provider value={{
      cart: state, addToCart, deducToCart, clearCart, removeToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
