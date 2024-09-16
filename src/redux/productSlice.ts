import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../interface/Product'; // Asegúrate de que esta ruta sea correcta

interface ProductsState {
  products: Product[];
  wishlist: number[];
}

const initialState: ProductsState = {
  products: [],
  wishlist: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addToWishlist(state, action: PayloadAction<number>) {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.wishlist = state.wishlist.filter(id => id !== action.payload);
    },
  },
});

export const { setProducts, addToWishlist, removeFromWishlist } = productsSlice.actions;
export default productsSlice.reducer;
