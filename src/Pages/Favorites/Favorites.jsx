import React, { useState, useEffect } from "react";
import ContainerProductDetail from "../../components/ui/ContainerProductDetail/ContainerProductDetail";
import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import { FaTrash } from "react-icons/fa"; 
import "./favorites.css"; 

const Favorites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const handleDelete = (productId) => {
    const updatedFavorites = favorites.filter(product => product.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
  };

  return (
    <div>
      <div className="product-list">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <React.Fragment key={product.id}>
              <div className="product-wrapper">
                <ImageContainer image={product.image} />
                <ContainerProductDetail
                  id={product.id}
                  name={product.name}
                  rating={product.rating}
                />
       
                <button 
                  className="delete-button" 
                  onClick={() => handleDelete(product.id)}
                >
                  <FaTrash size={20} /> 
                </button>
              </div>
            </React.Fragment>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
