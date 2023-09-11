import { Product } from './product';

export interface ICartProducts extends Product {
  _id: string;
  itemQuantity: number;
  cartQuantity: number;
}

export interface CartState {
  cartItems: ICartProducts[];
}

export interface CartItem extends Product {
  itemQuantity: number;
}
