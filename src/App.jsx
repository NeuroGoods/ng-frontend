import "./App.css";
import Button from "./components/ui/Button/Button";
import IconContainer from "./components/ui/IconContainer/IconContainer";
import Input from "./components/ui/Input/Input";
import Navbar from './components/ui/Navbar/Navbar'
import ProductCard from "./components/product/ProductCard/ProductCard";
import CategoryNav from "./components/ui/CategoryNav/CategoryNav";

function App() {
  return (
    <>
      <Button onClick="" variation="light" type="button" text="Contactar" />
      <IconContainer variation="apple" />
      <IconContainer variation="like" />
      <Input variation="product-input" />
      <ProductCard
        image="https://via.placeholder.com/250"
        name="Ejemplo de Producto"
        rating={4}
      />
      <Navbar/>
      <CategoryNav/>
     
    </>
  );
}

export default App;
