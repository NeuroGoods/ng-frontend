import './App.css'
import Button from './components/ui/Button/Button'
import IconContainer from './components/ui/IconContainer/IconContainer'
import Bell from './assets/icons/Bell.svg'
import Input from './components/ui/Input/Input'

function App() {

  return (
    <>
      <Button onClick="" variation='light' type='button' text="Contactar" />
      <IconContainer variation='apple'/>
      <Input variation='product-input'/>
      <Product/>
    </>
  )
}

export default App
