import React from "react";
import ContainerProductDetail from "../../components/ui/ContainerProductDetail/ContainerProductDetail";
import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import "./favorites.css"; // Importamos los estilos

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <div className="product-list">
        {favorites.length > 0 ? (
          favorites.map((product, index) => (
            <React.Fragment key={product.id}>
              <div className="product-wrapper">
                <ImageContainer image={product.image} />
                <ContainerProductDetail
                  id={product.id}
                  name={product.name}
                  rating={product.rating}
                />
              </div>
              {index < favorites.length - 1 && <div className="separator"></div>}
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
