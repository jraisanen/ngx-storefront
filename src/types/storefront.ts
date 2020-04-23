import { CartItem, Cart, PostCartItem } from './cart';
import { Config } from './config';
import { OrderItem, Order } from './order';
import { Page } from './page';
import { Product } from './product';
import { Taxonomy } from './taxonomy';
import { AccessToken } from './token';
import { Customer } from './customer';

export type T =
  | AccessToken
  | Cart
  | CartItem
  | Config
  | PostCartItem
  | Order
  | OrderItem
  | Page
  | Product
  | Taxonomy
  | Customer
  | boolean
  | string;

export interface Storefront {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
