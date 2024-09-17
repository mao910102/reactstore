import { IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';

const AppHeader: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#000', 
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Roboto, sans-serif', 
    fontSize: '22px',
    color: '#fff', 
    fontWeight: 'bold',
  };

  const iconStyle: React.CSSProperties = {
    color: '#ff6b6b', 
    fontSize: '28px',
    marginRight: '10px',
  };

  return (
    <IonHeader>
      <IonToolbar style={headerStyle}>
        <IonIcon icon={heartOutline} style={iconStyle} slot="start" />
        <IonTitle style={titleStyle}>App Mauro</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
