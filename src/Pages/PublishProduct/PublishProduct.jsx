import React, { useState } from "react";
import { FaMapMarkerAlt, FaImage } from "react-icons/fa";
import Button from "../../components/ui/Button/Button";
import { createProduct } from "../../api/apiService";
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
    location: "Madrid, España",
    description: "",
    image: null,
    categories: [],
  });

  const [errors, setErrors] = useState({});
  const [_loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

    if (!formData.description.trim()) {
      validationErrors.description = "⚠ La descripción no puede estar vacía.";
    } else if (formData.description.length > 500) {
      validationErrors.description = "⚠ La descripción debe tener máximo 500 caracteres.";
    }

    if (!formData.image) {
      validationErrors.image = "⚠ Debes subir una imagen.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: sanitizeInput(e.target.value) });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: "⚠ La imagen no debe superar los 5MB." }));
    } else {
      setErrors((prev) => ({ ...prev, image: "" }));
      setFormData({ ...formData, image: file });
    }
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

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("image", formData.image);
      formData.categories.forEach((category) => {
        formDataToSend.append("categories", category);
      });

      await createProduct(formDataToSend);
      setMessage("✅ Producto subido con éxito");

      setFormData({
        name: "",
        price: "",
        location: "Madrid, España",
        description: "",
        image: null,
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
          <label>Ubicación:</label>
          <div className="location-box">
            <FaMapMarkerAlt className="location-icon" />
            <span>{formData.location}</span>
          </div>
        </div>

        <div style={{ height: "20px" }}></div>
        <div className="image-upload">
          <label className="upload-button">
            Subir imagen
            <input type="file" onChange={handleFileChange} hidden />
          </label>
          <FaImage className="image-icon" />
        </div>
        {errors.image && <p className="error">{errors.image}</p>}

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