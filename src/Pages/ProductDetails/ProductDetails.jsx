import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/apiService";
import styles from "./ProductDetails.module.css";
import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import ContainerProductDetail from "../../components/ui/ContainerProductDetail/ContainerProductDetail";
import Button from "../../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { updateProduct, deleteProduct } from "../../api/apiService";

const ProductDetailsPage = () => {
    const params = useParams();
    const id = localStorage.getItem("lastViewedProductId");
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Estado para el contador
    const [showModal, setShowModal] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
        name: "",
        description: "",
        price: "",
        image: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
                setEditedProduct({
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    image: data.image
                });
                console.log(data);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDelete = async () => {
        try {
            await deleteProduct(id);
            navigate("/");
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, editedProduct);
            setShowModal(false);
            window.location.reload();
        } catch (error) {
            console.error("Error al actualizar producto:", error);
        }
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
                    <Button variation="light" text="Editar" onClick={() => setShowModal(true)} />
                    <Button variation="danger" text="Eliminar" onClick={handleDelete} />
                    </div>
                </div>
            </div>
        {showModal && (
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <h2>Editar producto</h2>
                    <form onSubmit={handleEditSubmit} className={styles.editForm}>
                        <input
                            type="text"
                            name="name"
                            value={editedProduct.name}
                            onChange={handleEditChange}
                            placeholder="Nombre"
                        />
                        <input
                            type="text"
                            name="description"
                            value={editedProduct.description}
                            onChange={handleEditChange}
                            placeholder="Descripción"
                        />
                        <input
                            type="number"
                            name="price"
                            value={editedProduct.price}
                            onChange={handleEditChange}
                            placeholder="Precio"
                        />
                        <input
                            type="text"
                            name="image"
                            value={editedProduct.image}
                            onChange={handleEditChange}
                            placeholder="URL de imagen"
                        />
                        <div className={styles.buttonContainer}>
                            <Button variation="primary" text="Guardar cambios" type="submit" />
                            <Button variation="light" text="Cancelar" onClick={() => setShowModal(false)} />
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
    );
};

export default ProductDetailsPage;
