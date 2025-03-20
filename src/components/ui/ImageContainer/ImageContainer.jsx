import * as React from "react";
import styles from "./ImageContainer.module.css";

function ImageContainer({ image }) {
  return (
    <section className={styles.container}>
      <img src={image} alt="Imagen" className={styles.image} />
    </section>
  );
}

export default ImageContainer;
