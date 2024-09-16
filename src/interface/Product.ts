export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string; // Opcional si no lo usas
  images?: string[]; // Opcional si no lo usas
  category?: {
    id: number;
    name: string;
    image?: string; // Opcional si no lo usas
  };
  creationAt?: string; // Opcional si no lo usas
  updatedAt?: string; // Opcional si no lo usas
}
