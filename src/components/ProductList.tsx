import React from 'react';
import ProductItem from './ProductItem'; // Asegúrate de que la ruta sea correcta
import { Product } from '../interface/Product'; // La interfaz Product debe estar en la misma ubicación

interface ProductListProps {
  products: Product[];
  onAddToWishlist?: (id: number) => void; // Función opcional
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToWishlist }) => {
  console.log('Productos recibidos en ProductList:', products);
  return (
    <div style={{ padding: '10px' }}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title} // Cambiado de product.name a product.title
            price={product.price}
            onAddToWishlist={onAddToWishlist}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
