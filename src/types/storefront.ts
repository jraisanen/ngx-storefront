import { CartItem, Cart, PostCartItem } from './cart';
import { OrderItem, Order } from './order';
import { Page } from './page';
import { Product } from './product';
import { Taxonomy } from './taxonomy';
import { AccessToken } from './token';
import { User } from './user';

export type T =
  | AccessToken
  | Cart
  | CartItem
  | PostCartItem
  | Order
  | OrderItem
  | Page
  | Product
  | Taxonomy
  | User
  | boolean
  | string;

export interface Storefront {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
