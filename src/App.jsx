import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
}

export default App;