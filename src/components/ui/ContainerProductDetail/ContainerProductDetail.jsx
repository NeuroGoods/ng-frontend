import React from "react";
import "./ContainerProductDetail.css"; // ✅ Asegúrate de que está bien escrito

import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="content">
        <h3 className="title">Producto</h3>
        <p className="price">$40<span>/unidad</span></p>
      </div>
      <div className="footer">
        <p className="location">
          <FaMapMarkerAlt className="icon" /> Madrid, España
        </p>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
          <span className="ratingValue">4.9</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
