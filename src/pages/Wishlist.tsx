import React from 'react';
import { Product } from '../interface/Product';

interface ProductProps {
  products: Product[];
  onAddToWishlist?: (id: number) => void;
  onRemoveFromWishlist?: (id: number) => void;
}

const ProductList: React.FC<ProductProps> = ({ products, onAddToWishlist, onRemoveFromWishlist }) => {
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
    <div style={{ padding: '10px' }}>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} style={containerStyle}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            {onAddToWishlist && !onRemoveFromWishlist && (
              <button
                onClick={() => onAddToWishlist(product.id)}
                style={buttonStyle}
                aria-label={`Add ${product.title} to wishlist`}
              >
                Add to Wishlist
              </button>
            )}
            {onRemoveFromWishlist && (
              <button
                onClick={() => onRemoveFromWishlist(product.id)}
                style={buttonStyle}
                aria-label={`Remove ${product.title} from wishlist`}
              >
                Remove from Wishlist
              </button>
            )}
          </div>
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
