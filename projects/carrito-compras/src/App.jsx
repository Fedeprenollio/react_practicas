import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
// import { CartProvider } from './contex/cart'
import { useFilter } from './hooks/useFilter'
import { products as inicialProducts } from './mocks/products.json'

function App () {
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(inicialProducts)
  return (
    <div>
      <h1>Shopping cart</h1>
      <Cart />
      <Header />
      <Products products={filteredProducts} />
      {/* <Footer /> */}
    </div>
  )
}

export default App
