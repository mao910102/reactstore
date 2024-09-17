// src/services/productService.ts
import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1';


export const fetchProducts = async () => {

  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;  // Retorna la data recibida
  } catch (error) {
    console.error('Error al cargar los productos:', error);
    throw error;  
  }
};


export const fetchProductById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;  // Retorna la data recibida
  } catch (error) {
    console.error(`Error al cargar el producto con ID ${id}:`, error);
    throw error;  
  }
};
