import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../../components/ui/Button/Button";
import { createProduct, getProducts } from "../../api/apiService";
import "./PublishProduct.css";

const categoriesList = [
  "Sensory-Friendly",
  "Organización",
  "Regulación",
  "Recursos Didácticos",
  "Bienestar",
  "Moda",
];

const sanitizeInput = (input) => {
  return input.replace(/<[^>]*>?/gm, "");
};

const priceRegex = /^\$?\d+(\.\d{1,2})?$/;

const PublishProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    categories: [],
  });

  const [errors, setErrors] = useState({});
  const [_loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "⚠ El nombre es obligatorio.";
    } else if (!/^[a-zA-Z0-9\s]+$/.test(formData.name)) {
      validationErrors.name = "⚠ Solo letras y números permitidos.";
    }

    if (!formData.price.trim()) {
      validationErrors.price = "⚠ El precio es obligatorio.";
    } else if (!priceRegex.test(formData.price)) {
      validationErrors.price = "⚠ Formato de precio inválido (Ej: $40.50).";
    }

    if (!formData.stock.trim()) {
      validationErrors.stock = "⚠ El stock es obligatorio.";
    } else if (isNaN(formData.stock) || formData.stock < 0) {
      validationErrors.stock = "⚠ Stock debe ser un número positivo.";
    }

    if (!formData.description.trim()) {
      validationErrors.description = "⚠ La descripción no puede estar vacía.";
    } else if (formData.description.length > 500) {
      validationErrors.description = "⚠ La descripción debe tener máximo 500 caracteres.";
    }

    if (!formData.image.trim()) {
      validationErrors.image = "⚠ Debes proporcionar una URL de imagen.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: sanitizeInput(e.target.value) });
  };

  const handleCategoryToggle = (category) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setMessage("");

    // Mapeo de nombres a IDs de categorías
    const categoryMap = {
      "Sensory-Friendly": 1,
      "Organización": 2,
      "Recursos Didácticos": 3,
      "Regulación": 4,
      "Moda": 5,
    };

    // Crear array de IDs en lugar de strings
    const categoryIDs = formData.categories
      .map((cat) => categoryMap[cat])
      .filter(Boolean);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("stock", formData.stock);
    formDataToSend.append("image", formData.image); // Ahora es string
    categoryIDs.forEach((id) => {
      formDataToSend.append("category_id[]", id);
    });

    const debugObject = {
      name: formData.name,
      price: formData.price,
      stock: formData.stock,
      description: formData.description,
      category_id: categoryIDs,
    };

    console.log("Objeto limpio a enviar (sin imagen):", debugObject);

    for (let [key, value] of formDataToSend.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      await createProduct(formDataToSend);
      setMessage("✅ Producto subido con éxito");

      setFormData({
        name: "",
        price: "",
        stock: "",
        description: "",
        image: "",
        categories: [],
      });
      setErrors({});
    } catch (error) {
      console.error("❌ Error al subir producto", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="product-form" onSubmit={handleSubmit}> {}
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Producto"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Precio:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="$40/unidad"
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Cantidad disponible"
          />
          {errors.stock && <p className="error">{errors.stock}</p>}
        </div>

        <div className="form-group">
          <label>Ubicación:</label>
          <div className="location-box">
            <FaMapMarkerAlt className="location-icon" />
            <span>{formData.location}</span>
          </div>
        </div>

        <div style={{ height: "20px" }}></div>
        <div className="form-group">
          <label>URL de la imagen:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://ruta-a-la-imagen.com/imagen.jpg"
          />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>

        <div style={{ height: "20px" }}></div>
        <label>Danos una breve descripción de tu producto:</label>
        <div style={{ height: "20px" }}></div>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Escribe aquí..."
        />
        {errors.description && <p className="error">{errors.description}</p>}

        <div style={{ height: "20px" }}></div>
        <label>Agrega las categorías que apliquen:</label>
        <div className="categories">
          {categoriesList.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-button ${formData.categories.includes(category) ? "selected" : ""}`}
              onClick={() => handleCategoryToggle(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="button-container">
          <Button type="submit" text="Subir producto" variation="big" />
        </div>

        {message && <p className="status-message">{message}</p>}
      </form>
    </div>
  );
};

export default PublishProduct;