import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../../api/apiService";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ limit = 10, activeCategory = null }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Obtener productos desde la API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log("✅ Productos obtenidos desde la API:", data);
                setProducts(data);
            } catch (error) {
                console.error(
                    "❌ Error al obtener productos desde la API:",
                    error
                );
            }
        };

        fetchProducts();
    }, []);

    //Filtrar productos cuando cambie la categoría activa
    useEffect(() => {
        filterProducts(products, activeCategory);
    }, [activeCategory, products]);

    const filterProducts = (allProducts, categoryId) => {
        if (!allProducts.length) return;

        const filtered = categoryId
            ? allProducts.filter(
                  (product) => product.category_id === categoryId
              )
            : allProducts;

        setFilteredProducts(filtered.slice(0, limit));
    };

    return (
        <div className={styles.productsGrid}>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        rating={product.rating}
                    />
                ))
            ) : (
                <p className={styles.noProducts}>
                    No hay productos en esta categoría.
                </p>
            )}
        </div>
    );
};

export default ProductGrid;
