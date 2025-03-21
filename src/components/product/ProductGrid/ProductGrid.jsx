import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../../api/apiService";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ limit = 10, activeCategory = "Alive" }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Obtener productos desde la API
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const data = await getProducts();
            console.log("✅ Productos obtenidos desde la API:", data);
          } catch (error) {
            console.error("❌ Error al obtener productos desde la API:", error);
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
        const filtered = allProducts
            .filter((product) => product.status === categoryId)
            .slice(0, limit); // Limitar la cantidad de productos mostrados
        setFilteredProducts(filtered);
    };

    return (
        <div className={styles.productsGrid}>
            
        {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <ProductCard
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
