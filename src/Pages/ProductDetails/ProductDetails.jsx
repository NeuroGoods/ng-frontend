import Button from "../../components/ui/Button/Button";
import styles from "./ProductDetails.module.css";
import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import ContainerProductDetail from "../../components/ui/ContainerProductDetail/ContainerProductDetail";
import Navbar from "../../components/ui/Navbar/Navbar";


const ProductDetailsPage = () => {
  return (
    <div className={styles.productPage}>
      {/* Imagen del producto */}
      <ImageContainer />

      {/* Detalles del producto */}
      <ContainerProductDetail />

      {/* Contador de cantidad y tiempo de entrega */}
      <div className={styles.detailsContainer}>
        <div className={styles.quantityContainer}>
          <button className={styles.quantityButton}>-</button>
          <span className={styles.quantity}>2</span>
          <button className={styles.quantityButton}>+</button>
        </div>
        <span className={styles.time}>⏳ 5 Días</span>
      </div>

      {/* Descripción */}
      <div className={styles.description}>
        <h3>Descripción</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
          eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta
          egestas malesuada et. Consequat mauris lacus euismod montes.
        </p>
      </div>

      {/* Botones de acción */}
      <div>
      <Button variation="light" text = "contactar"/>
      <Button variation="primary" text = "comprar"/>
        <Navbar />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
