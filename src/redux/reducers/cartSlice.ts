import { createSlice } from '@reduxjs/toolkit';
import Product from '../../pages/product/Product';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
}

export interface CartProduct {
  cartItems: Product[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartProduct = {
  cartItems: [],
  amount: 1,
  total: 1,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

const cartReducer = cartSlice.reducer;
export default cartReducer;
