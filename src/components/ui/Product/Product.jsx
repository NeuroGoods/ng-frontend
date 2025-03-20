import React from 'react'
import styles from "./Product.module.css";

const Product = ({ image, name, rating }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img 
          src={image} // Usa la imagen pasada como prop
          alt={name} // Usa el nombre del producto como alt para la imagen
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <div className="product-rating">
          <span className="stars">{"⭐".repeat(5)}</span> {/* Muestra 5 estrellas */}
          <span className="rating-value">{rating}</span>
        </div>
      </div>

    </div>
  )
}

export default Product