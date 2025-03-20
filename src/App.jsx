import './App.css'
import Button from './components/ui/Button/Button'
import Input from './components/ui/Input/Input'
import Product from './components/ui/Product/Product'

function App() {

  return (
    <>
      {/* <Button onClick="" variation='light' type='button' text="Contactar" />
      <Input variation='product-input'/> */}
      <div className="product-list">
        {/* Usamos el componente ProductCard y le pasamos datos de ejemplo */}
        <Product
          image="https://via.placeholder.com/150"
          name="Product"
          rating={4.5}
        />
      </div>
    </>
  )
}

export default App
