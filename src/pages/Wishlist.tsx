import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ProductList from '../components/ProductList';

const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.products.wishlist);
  const products = useSelector((state: RootState) =>
    state.products.products.filter(product => wishlist.includes(product.id))
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Wishlist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>My Wishlist</h1>
        <ProductList products={products} onAddToWishlist={() => {}} />
      </IonContent>
    </IonPage>
  );
};

export default Wishlist;
