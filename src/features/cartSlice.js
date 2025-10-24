import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find(item => item.id === plant.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalCost += plant.price;
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;