import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import styles from "./ProductDetails.module.css";
import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import ContainerProductDetail from "../../components/ui/ContainerProductDetail/ContainerProductDetail";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1); // Estado para el contador

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <ImageContainer />

      <div className={styles.card}>
        <ContainerProductDetail />
        <div className={styles.quantityContainer}>
          <button className={styles.quantityButton} onClick={decreaseQuantity}>-</button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.quantityButton} onClick={increaseQuantity}>+</button>
          <span className={styles.time}>⏳ 5 Días</span>
        </div>

        <div className={styles.description}>
          <h3>Descripción</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus.
          </p>
          <div className={styles.buttonContainer}>
            <Button variation="light" text="Contactar" />
            <Button variation="primary" text="Comprar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
