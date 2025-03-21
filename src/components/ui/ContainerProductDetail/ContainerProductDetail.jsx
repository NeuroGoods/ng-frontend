import React from "react";
import styles from "./ContainerProductDetail.module.css";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const ContainerProductDetail = ({id, name, rating, location="N/A", price=30}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>{price}<span>€</span></p>
      </div>
      <div className={styles.footer}>
        <p className={styles.location}>
          <FaMapMarkerAlt className={styles.icon} />{location}
        </p>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={styles.star} />
          ))}
          <span className={styles.ratingValue}>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ContainerProductDetail;
