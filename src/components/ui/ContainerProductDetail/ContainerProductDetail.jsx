import React from "react";
import styles from "./ProductCard.module.css";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>Producto</h3>
        <p className={styles.price}>$40<span>/unidad</span></p>
      </div>
      <div className={styles.footer}>
        <p className={styles.location}>
          <FaMapMarkerAlt className={styles.icon} /> Madrid, España
        </p>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={styles.star} />
          ))}
          <span className={styles.ratingValue}>4.9</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
