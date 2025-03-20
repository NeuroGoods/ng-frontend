import React from "react";
import Slider from "react-slick";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
