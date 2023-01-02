import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

const initialState: Product[] = [];
export const fetchAllProducts = createAsyncThunk(
  'fetchAllProducts',
  async () => {
    try {
      const res = await axios.get(
        'https://api.escuelajs.co/api/v1/products?limit=20&offset=5'
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchAllProducts.fulfilled, (state, action) => {
      console.log('data is fetched');
      if (action.payload && 'message' in action.payload) {
        return state;
      } else if (!action.payload) {
        return state;
      }
      return action.payload;
    });
    build.addCase(fetchAllProducts.rejected, (state, action) => {
      console.log('error');
      return state;
    });
    build.addCase(fetchAllProducts.pending, (state, action) => {
      console.log('loading');
      return state;
    });
  },
});

const productReducer = productSlice.reducer;
export default productReducer;
