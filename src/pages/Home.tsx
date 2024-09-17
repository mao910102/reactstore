import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
} from "@ionic/react";
import ProductList from "../components/ProductList";
import { Product } from "../interface/Product";
import AppHeader from "../components/Header";
import ErrorModal from "../components/ErrorModal";  // Importamos el nuevo componente

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [view, setView] = useState<"home" | "wishlist">("home");
  const [error, setError] = useState<string | null>(null); // Estado para manejar el error
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para mostrar el modal

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Productos cargados:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);

        if (error instanceof TypeError) {
          setError("No se pudo conectar al servidor. Por favor, revisa tu conexión a internet.");
        } else {
          setError("Ocurrió un error al cargar los productos. Inténtalo de nuevo más tarde.");
        }
        setShowErrorModal(true); // Mostrar modal en caso de error
      }
    };

    loadProducts();
  }, []);

  const handleAddToWishlist = (id: number) => {
    setWishlist((prevWishlist) => {
      const newWishlist = [...prevWishlist, id];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist)); // Persistir en localStorage
      return newWishlist;
    });
  };

  const handleRemoveFromWishlist = (id: number) => {
    setWishlist((prevWishlist) => {
      const newWishlist = prevWishlist.filter((itemId) => itemId !== id);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist)); // Persistir en localStorage
      return newWishlist;
    });
  };

  // Cargar wishlist desde localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Alternar vista
  const handleViewChange = (newView: "home" | "wishlist") => {
    setView(newView);
  };

  return (
    <IonPage>
      <AppHeader />
      <IonHeader>
        <IonToolbar>
          <IonTitle
            style={{ margin: "12px", fontSize: "20px", fontWeight: "bold" }}
          >
            Product List
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <IonButton
            onClick={() => handleViewChange("home")}
            style={{ marginRight: "10px" }}
          >
            Show Products
          </IonButton>
          <IonButton onClick={() => handleViewChange("wishlist")}>
            Show Wishlist
          </IonButton>
        </div>
        {view === "home" && (
          <ProductList
            products={products}
            onAddToWishlist={handleAddToWishlist}
          />
        )}
        {view === "wishlist" && (
          <ProductList
            products={products.filter((product) =>
              wishlist.includes(product.id)
            )}
            onRemoveFromWishlist={handleRemoveFromWishlist}
          />
        )}
      </div>

      {/* Usamos el componente ErrorModal */}
      <ErrorModal
        isOpen={showErrorModal}
        message={error}
        onClose={() => setShowErrorModal(false)}
      />
    </IonPage>
  );
};

export default Home;
