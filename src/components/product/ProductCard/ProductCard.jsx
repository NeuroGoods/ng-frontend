import React from "react";
import styles from "./ProductCard.module.css"
import IconContainer from "../../ui/IconContainer/IconContainer";


function ProductCard({ image, name, rating }) {
  // Recibe los props
  return (
    <div className={styles.productCard}>
      
        <img className={styles.productImagePlaceholder} src={image} alt="" />
        <div className={styles.productInfoBox}>
          <IconContainer variation="like" className={styles.iconFavorites} />
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
