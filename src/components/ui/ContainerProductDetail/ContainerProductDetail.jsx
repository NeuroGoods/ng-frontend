import React from "react";
import "./ContainerProductDetail.css"; // ✅ Asegúrate de que está bien escrito

import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const ContainerProductDetail = ({id, name, rating, location="N/A", price=30}) => {
  return (
    <div className="card">
      <div className="content">
        <h3 className="title">{name}</h3>
        <p className="price">{price}<span>€</span></p>
      </div>
      <div className="footer">
        <p className="location">
          <FaMapMarkerAlt className="icon" />{location}
        </p>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
          <span className="ratingValue">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ContainerProductDetail;
