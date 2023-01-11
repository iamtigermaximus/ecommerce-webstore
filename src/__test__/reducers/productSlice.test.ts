import { fetchAllProducts } from './../../redux/reducers/productSlice';
import { store } from '../../redux/store';

describe('Test all actions', () => {
  test('Should return initial state.', () => {
    store.dispatch(fetchAllProducts);
    expect(store.getState().productReducer.length).toBe(0);
  });
  test('Should fetch all products.', async () => {
    // await store.dispatch(fetchAllProducts);
    // expect(store.getState().productReducer.length).toBe(200);
  });
});
