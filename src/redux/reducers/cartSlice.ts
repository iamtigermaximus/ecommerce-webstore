import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, ICartProducts } from '../../types/cart';
import { Product } from '../../types/product';

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          itemQuantity: state.cartItems[existingIndex].itemQuantity + 1,
        };
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      } else {
        let tempProductItem = {
          ...action.payload,
          itemQuantity: 1,
        };
        state.cartItems.push(tempProductItem);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem('cartItems', '[]');
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
    },
    decrementQuantity(state, action: PayloadAction<Product>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload._id
      );

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload._id
        );
        state.cartItems = nextCartItems;
      }
    },
    loadCart: (state, action: PayloadAction<ICartProducts[]>) => {
      state.cartItems = action.payload;
    },
  },
});
const cartReducer = cartSlice.reducer;
export const { addToCart, removeItem, decrementQuantity, clearCart, loadCart } =
  cartSlice.actions;
export default cartReducer;
