// src/services/productService.ts
import axios from 'axios';

// URL base de la API
const BASE_URL = 'https://api.escuelajs.co/api/v1';

// Función para obtener productos
export const fetchProducts = async () => {

  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;  // Retorna la data recibida
  } catch (error) {
    console.error('Error al cargar los productos:', error);
    throw error;  // Lanza el error para que lo maneje quien llame a la función
  }
};

// Función para obtener un producto específico por ID (opcional)
export const fetchProductById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;  // Retorna la data recibida
  } catch (error) {
    console.error(`Error al cargar el producto con ID ${id}:`, error);
    throw error;  // Lanza el error para que lo maneje quien llame a la función
  }
};

// Función para manejar la adición de productos a la lista de deseados (opcional)
// Puede ser que necesites algo para actualizar o enviar datos a la API
// En este caso, asumo que guardas los productos deseados localmente
