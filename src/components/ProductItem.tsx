import React from 'react';

interface ProductItemProps {
  id: number;
  title: string;
  price: number;
  onAddToWishlist?: (id: number) => void; // Función opcional
}

const ProductItem: React.FC<ProductItemProps> = ({ id, title, price, onAddToWishlist }) => {
  // Estilos en objeto CSS
  const containerStyle: React.CSSProperties = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
    textAlign: 'center',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h3>{title}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      {onAddToWishlist && (
        <button
          onClick={() => onAddToWishlist(id)}
          style={buttonStyle}
          aria-label={`Add ${title} to wishlist`}
        >
          Agregar a deseados
        </button>
      )}
    </div>
  );
};

export default ProductItem;
