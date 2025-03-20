import { useEffect, useState } from "react";
import CategoryNav from "../../components/ui/CategoryNav/CategoryNav";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import styles from "./Products.module.css";

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("Alive"); // ID de la categoría activa

    return (
        <div className={styles.productsPage}>
            <CategoryNav
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <ProductGrid limit={12} activeCategory={activeCategory} />
        </div>
    );
};

export default Products;
