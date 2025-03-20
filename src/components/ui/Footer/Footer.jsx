import React from "react";
import styles from "./Footer.module.css";
import circle from "../../../assets/logo/Circle.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src={circle} alt="NeuroGoods Logo" className={styles.logo} />
        <h2 className={styles.brandName}>NeuroGoods</h2>
        <nav className={styles.footerNav}>
          <a href="#legal" className={styles.footerLink}>Legal</a>
          <a href="#contact" className={styles.footerLink}>Contáctanos</a>
        </nav>
      </div>
      <p className={styles.copyright}>
        ©2025 NeuroGoods. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
