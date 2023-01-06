import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../types/product';

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

export interface ProductState {
  products: [];
}

const initialState: Product[] = [];

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    highestPriceFirst: (state) => {
      state.sort((a, b) => (a.price > b.price ? -1 : 1));
    },
    lowestPriceFirst: (state) => {
      state.sort((a, b) => (a.price < b.price ? -1 : 1));
    },
    alphabetical: (state) => {
      state.sort((a, b) => (a.title > b.title ? -1 : 1));
    },
    alphabetical2: (state) => {
      state.sort((a, b) => (a.title < b.title ? -1 : 1));
    },
    filterBy(state, action) {
      state.filter = action.payload;
    },
  },
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
export const {
  lowestPriceFirst,
  highestPriceFirst,
  alphabetical,
  alphabetical2,
  filterBy,
} = productSlice.actions;
export default productReducer;
