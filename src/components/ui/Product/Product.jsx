import React from "react";
import styles from "./Product.module.css";


function Product({ image, name, rating }) {
  // Recibe los props
  return (
    <div className={styles.productCard}>
      <div className={styles.productImagePlaceholder}>
        <div className={styles.productInfoBox}>
          <h2 className={styles.productName}>{name || "Product"}</h2>
          <div className={styles.productRating}>
            <span className={styles.stars}>
              {"⭐".repeat(rating) || "⭐⭐⭐⭐⭐"}
            </span>
            <span className={styles.ratingValue}>{rating || 5}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
