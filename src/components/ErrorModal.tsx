import React from "react";
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/react";

interface ErrorModalProps {
  isOpen: boolean;
  message: string | null;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, message, onClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Error</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>{message}</p>
        <IonButton expand="block" onClick={onClose}>
          Cerrar
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default ErrorModal;
