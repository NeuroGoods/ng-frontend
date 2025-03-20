import React from "react";
import styles from "./ProductCard.module.css";
import IconContainer from "../../ui/IconContainer/IconContainer";

function ProductCard({ id, image, name, rating }) {

  const product = { id, image, name, rating }; // Datos del producto incluyendo ID

  const handleLikeClick = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Verifica si el producto ya está guardado en favoritos por su ID
    const isAlreadyFavorite = favorites.some(fav => fav.id === product.id);

    if (!isAlreadyFavorite) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      console.log("Producto guardado en favoritos:", product);
    } else {
      console.log("El producto ya está en favoritos.");
    }
  };

  return (
    <div className={styles.productCard}>
      <img className={styles.productImagePlaceholder} src={image} alt={name} />
      <div className={styles.productInfoBox}>
        <IconContainer variation="like" className={styles.iconFavorites} onClick={handleLikeClick} />
        <h2 className={styles.productName}>{name || "Product"}</h2>
        <div className={styles.productRating}>
          <span className={styles.stars}>
            {"⭐".repeat(rating) || "⭐⭐⭐⭐⭐"}
          </span>
          <span className={styles.ratingValue}>{rating || 5}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
