import React, { useState, useEffect } from "react";
import ContainerProductDetail from "../../components/ui/ContainerProductDetail/ContainerProductDetail";
import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import { FaTrash } from "react-icons/fa";
import "./favorites.css";

const Favorites = () => {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    const handleDelete = (productId) => {
        const updatedFavorites = favorites.filter(
            (product) => product.id !== productId
        );
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div>
            <div className="product-list">
                {favorites.length > 0 ? (
                    favorites.map((product) => (
                        <div key={product.id} className="product-wrapper">
                            {/* Botón de eliminar */}
                            <button
                                className="delete-button"
                                onClick={() => handleDelete(product.id)}
                            >
                                <FaTrash size={20} />
                            </button>

                            {/* Contenedor de Imagen y Detalles */}
                            <div className="product-content">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <ContainerProductDetail
                                    id={product.id}
                                    name={product.name}
                                    rating={product.rating}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;