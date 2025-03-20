import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Pages/Products/Products";
import PublishProduct from "./Pages/PublishProduct/PublishProduct";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";



function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts(){
      try {
        const products = await axios.get('http://localhost:8000/api/products')
        console.log(products.data)
        setProducts(products.data)
      } catch (error) {
        console.log(error)
      } 
    }
    getAllProducts()
  }, [])



  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map(product => <li key={product.id}>{product.name} </li> )}
      </ul>
    </div>
  );
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/publish-product" element={<PublishProduct/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
export default App;
