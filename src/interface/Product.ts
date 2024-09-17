export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];  // Array de URLs de imágenes
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
}



