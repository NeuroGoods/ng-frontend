import { useEffect, useState } from "react";
import CategoryNav from "../../components/ui/CategoryNav/CategoryNav";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import { getProducts } from "../../api/apiService";
import styles from "./Products.module.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Alive"); // ID de la categoría activa

    // Obtener productos desde la API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data.results);
                filterProducts(data, activeCategory);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };
        fetchData();
    }, []);

    // Filtrar productos cuando cambie la categoría activa
    useEffect(() => {
        filterProducts(products, activeCategory);
        console.log(activeCategory)
    }, [activeCategory, products]);

    const filterProducts = (allProducts, categoryId) => {
        if (!allProducts.length) return;
        const filtered = allProducts.filter(
            (product) => product.status === categoryId
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className={styles.productsPage}>
            <CategoryNav
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <div className={styles.productsGrid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id} // Se incluye el id del producto
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
        </div>
    );
};

export default Products;
