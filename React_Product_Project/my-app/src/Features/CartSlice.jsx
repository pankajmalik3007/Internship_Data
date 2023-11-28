
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [], 
    totalItems: 0, 
  },
  reducers: {
    addProduct: (state, action) => {
      const { id, thumbnail, title, price ,description,discountPercentage,rating} = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ id, thumbnail, title, price,description,discountPercentage,rating, quantity: 1 });
      }
      state.totalItems += 1;
    },
    removeProduct: (state, action) => {
      const productId = action.payload.id;
      state.products = state.products.filter((product) => product.id !== productId);
      state.totalItems -= 1;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
        if (existingProduct.quantity <= 0) {
          state.products = state.products.filter((product) => product.id !== id);
        }
        state.totalItems += quantity;
      }
    },
  },
});

export const { addProduct, removeProduct, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
