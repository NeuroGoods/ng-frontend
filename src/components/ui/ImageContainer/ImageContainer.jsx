import * as React from "react";
import styles from "./ImageContainer.module.css";

function ImageContainer({imgPath="https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D", alt}) {
  return (
  <div className={styles.imgContainer}>
  <img className="" src={imgPath} alt={alt} />
  </div>
  )
}

export default ImageContainer;
