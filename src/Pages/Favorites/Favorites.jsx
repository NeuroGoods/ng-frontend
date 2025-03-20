import React from "react";
import ProductCard from "../../components/ui/ContainerProductDetail/ContainerProductDetail";
import ContainerSection from '../../components/ui/ImageContainer/ImageContainer'

const Favorites = () => {
  return (
    <div>
      Favorites
      <h2>Jueves</h2>
      <p>Si ves esto, el componente se está mostrando correctamente.</p>
      <div>
        <ContainerSection />
        <ProductCard />
      </div>
    </div>
  );
};

export default Favorites;
