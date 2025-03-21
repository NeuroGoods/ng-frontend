import * as React from "react";
import styles from "./ImageContainer.module.css";

function ImageContainer(imgPath) {
  return <section className={styles.container}>
    <img style={{height:"100%", width:"100%"}} src={imgPath}/>
  </section>;
}

export default ImageContainer;
