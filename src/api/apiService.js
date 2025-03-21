import axios from "axios";

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/products")
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener producto con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/products", productData);
    return response.data;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};

// Actualizar un producto
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/api/products/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar producto con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un producto
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al eliminar producto con ID ${id}:`, error);
    throw error;
  }
};