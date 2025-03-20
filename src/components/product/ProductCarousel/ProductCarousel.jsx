import React from "react";
import Slider from "react-slick";
import styles from "./ProductCarousel.module.css";

const ProductCarousel = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1, // Solo una imagen visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/401",
    "https://via.placeholder.com/402",
    "https://via.placeholder.com/403",
    "https://via.placeholder.com/404",
  ];

  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </Slider>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={() => sliderRef.current.slickPrev()}

      >
        {"<"}
      </button>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={() => sliderRef.current.slickNext()}
      >
        {">"}
      </button>
    </div>
  );
};

export default ProductCarousel;
