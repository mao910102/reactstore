import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice'; // Asegúrate de que esta ruta sea correcta

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
