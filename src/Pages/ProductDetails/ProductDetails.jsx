import Button from "../../components/ui/Button/Button";
import styles from "./ProductDetails.module.css";
import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import ContainerProductDetail from "../../components/ui/ContainerProductDetail/ContainerProductDetail";

const ProductDetailsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <ImageContainer />

      <div className={styles.card}>
        <ContainerProductDetail />
        <div className={styles.quantityContainer}>
          <button className={styles.quantityButton}>-</button>
          <span className={styles.quantity}>2</span>
          <button className={styles.quantityButton}>+</button>
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
