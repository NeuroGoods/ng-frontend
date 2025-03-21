import * as React from "react";
import styles from "./ImageContainer.module.css";

function ImageContainer() {
  return <section className={styles.container}>
    <img style={{height:"100%", width:"100%"}} src="https://www.dzoom.org.es/wp-content/uploads/2022/03/mis-fotografias-paisaje-favoritas-07-810x540.jpg"/>
  </section>;
}

export default ImageContainer;
