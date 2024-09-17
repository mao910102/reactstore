import React from 'react';
import { Product } from '../interface/Product';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon, IonText, IonImg } from '@ionic/react';
import { heartOutline, heart } from 'ionicons/icons';

interface ProductProps {
  products: Product[];
  onAddToWishlist?: (id: number) => void;
  onRemoveFromWishlist?: (id: number) => void;
}

const ProductList: React.FC<ProductProps> = ({ products, onAddToWishlist, onRemoveFromWishlist }) => {
  const defaultImage = 'https://via.placeholder.com/150'; 

  // Estilo para las tarjetas
  const cardStyle: React.CSSProperties = {
    border: '2px solid #ccc',
    borderRadius: '15px', 
    margin: '10px', 
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden', 
    width: 'calc(33% - 20px)', 
    display: 'inline-block',
  };

  const imageStyle: React.CSSProperties = {
    borderRadius: '15px 15px 0 0',
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  };

  const priceStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#ff6b6b',
    fontWeight: 'bold',
  };

  return (
    <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.length > 0 ? (
        products.map((product) => {
          const imageUrl = product.images[0]?.slice(2, -2) || defaultImage;

          return (
            <IonCard key={product.id} style={cardStyle}>
              <IonImg src={imageUrl} alt={product.title} style={imageStyle} />
              <IonCardHeader>
                <IonCardTitle style={titleStyle}>{product.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText color="medium" style={{ marginBottom: '10px', display: 'block' }}>
                  {product.description}
                </IonText>
                <IonText style={priceStyle}>
                  Price: ${product.price.toFixed(2)}
                </IonText>
                {onAddToWishlist && !onRemoveFromWishlist && (
                  <IonButton expand="block" fill="solid" color="danger" onClick={() => onAddToWishlist(product.id)}>
                    <IonIcon icon={heartOutline} slot="start" />
                    Add to Wishlist
                  </IonButton>
                )}
                {onRemoveFromWishlist && (
                  <IonButton expand="block" fill="solid" color="light" onClick={() => onRemoveFromWishlist(product.id)}>
                    <IonIcon icon={heart} slot="start" />
                    Remove from Wishlist
                  </IonButton>
                )}
              </IonCardContent>
            </IonCard>
          );
        })
      ) : (
        <IonText>No products available.</IonText>
      )}
    </div>
  );
};

export default ProductList;
