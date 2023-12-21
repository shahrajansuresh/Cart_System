// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemId);

      if (selectedItem) {
        selectedItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemId);

      if (selectedItem) {
        selectedItem.quantity -= 1;
        if (selectedItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export default cartSlice.reducer;
