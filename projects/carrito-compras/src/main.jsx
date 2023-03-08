import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './contex/cart'
import { FilterProvider } from './contex/filter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <CartProvider>

      <App />
    </CartProvider>
  </FilterProvider>
)
