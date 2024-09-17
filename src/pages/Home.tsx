import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonContent,
  IonButton,
  IonText,
} from "@ionic/react";
import ProductList from "../components/ProductList";
import { Product } from "../interface/Product";
import AppHeader from "../components/Header";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [view, setView] = useState<"home" | "wishlist">("home"); 

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Productos cargados:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
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
    </IonPage>
  );
};

export default Home;
