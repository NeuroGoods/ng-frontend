import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
import IconContainer from "../../ui/IconContainer/IconContainer";

function ProductCard({ id, image, name, rating }) {
    const navigate = useNavigate();

    const product = { id, image, name, rating }; // Datos del producto incluyendo ID

    const handleLikeClick = (e) => {
        e.stopPropagation();
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        // Verifica si el producto ya está guardado en favoritos por su ID
        const isAlreadyFavorite = favorites.some(
            (fav) => fav.id === product.id
        );

        if (!isAlreadyFavorite) {
            favorites.push(product);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            console.log("Producto guardado en favoritos:", product);
        } else {
            console.log("El producto ya está en favoritos.");
        }
    };

    const handleCardClick = () => {
        localStorage.setItem("lastViewedProductId", product.id);
        navigate(`/product-details/${product.id}`);
    };

    return (
        <div className={styles.productCard}>
            <IconContainer
                variation="like"
                className={styles.iconFavorites}
                onClick={handleLikeClick}
            />
            <div onClick={handleCardClick}>
                <img
                    className={styles.productImagePlaceholder}
                    src={image}
                    alt={name}
                />
                <div className={styles.productInfoBox}>
                    <h2 className={styles.productName}>{name || "Product"}</h2>
                    <div className={styles.productRating}>
                        <span className={styles.stars}>
                            {"⭐".repeat(rating) || "⭐⭐⭐⭐⭐"}
                        </span>
                        <span className={styles.ratingValue}>{rating || 5}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
