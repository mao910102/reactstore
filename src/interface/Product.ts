export interface Product {
  inWishlist: unknown;
  createdAt: string | number | Date;
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];  
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
}



