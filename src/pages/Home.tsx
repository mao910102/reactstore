import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/react';
import ProductList from '../components/ProductList';
import { Product } from '../interface/Product';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Productos cargados:', data); // Verifica aquí
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    loadProducts();
  }, []);

  const handleAddToWishlist = (id: number) => {
    setWishlist((prevWishlist) => [...prevWishlist, id]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>App Mauro</IonTitle>
        </IonToolbar>
      </IonHeader>
{/*       <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Productos </h1>
      <pre style={{ padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '5px', textAlign: 'left' }}>
          {JSON.stringify(products, null, 2)}
        </pre> */}
      <IonContent>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Productos</h1>
        <ProductList products={products} onAddToWishlist={handleAddToWishlist} />
      </IonContent>
    </IonPage>
  );
};


export default Home;
