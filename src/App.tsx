import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { heart, home } from 'ionicons/icons';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';

const App: React.FC = () => (
  <IonReactRouter>
    <Route path="/home" component={Home} exact />
    <Route path="/wishlist" component={Wishlist} exact />
    <Redirect exact from="/" to="/home" />
  </IonReactRouter>
);

export default App;
