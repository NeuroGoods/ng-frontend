import './App.css'
import Button from './components/ui/Button/Button'
import IconContainer from './components/ui/IconContainer/IconContainer'
import Input from './components/ui/Input/Input'
import Product from './components/ui/Product/Product'

function App() {

  return (
    <>
      <Button onClick="" variation='light' type='button' text="Contactar" />
      <IconContainer variation='apple'/>
      <IconContainer variation='like'/>
      <Input variation='product-input'/>
      <Product/>
    </>
  )
}

export default App
