// src/redux/slices/wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) {
        state.items.push({ id, name, price });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlistItems = (state: { wishlist: WishlistState }) => state.wishlist.items;

export default wishlistSlice.reducer;
