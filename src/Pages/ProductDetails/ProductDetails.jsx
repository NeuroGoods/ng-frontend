import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/apiService";
import styles from "./ProductDetails.module.css";
import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import ContainerProductDetail from "../../components/ui/ContainerProductDetail/ContainerProductDetail";
import Button from "../../components/ui/Button/Button";

const ProductDetailsPage = () => {
    const params = useParams();
    const id = localStorage.getItem("lastViewedProductId");
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Estado para el contador

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    if (!product) {
        return <p>Cargando producto...</p>;
    }

    return (
        <div className={styles.pageContainer}>
            <ImageContainer imgPath={product.image} />
            <div className={styles.card}>
                <ContainerProductDetail
                    id={product.id}
                    name={product.name}
                    rating={product.rating}
                    price={product.price}
                />
                <div className={styles.quantityContainer}>
                    <button
                        className={styles.quantityButton}
                        onClick={decreaseQuantity}
                    >
                        -
                    </button>
                    <span className={styles.quantity}>{quantity}</span>
                    <button
                        className={styles.quantityButton}
                        onClick={increaseQuantity}
                    >
                        +
                    </button>
                    <span className={styles.time}>⏳ 5 Días</span>
                </div>
                <div className={styles.description}>
                    <h3>Descripción</h3>
                    <p>{product.description}</p>
                    <div className={styles.buttonContainer}>
                        <Button variation="light" text="Contactar" />
                        <Button variation="primary" text="Comprar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
