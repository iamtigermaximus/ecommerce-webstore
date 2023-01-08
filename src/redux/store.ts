import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import cartReducer from './reducers/cartSlice';
import categoryReducer from './reducers/categorySlice';

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
