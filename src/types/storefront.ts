import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Config } from '../models/config.model';
import { Customer } from '../models/customer.model';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/order-item.model';
import { Page } from '../models/page.model';
import { Product } from '../models/product.model';
import { Taxonomy } from '../models/taxonomy.model';
import { PostCartItem } from './cart';

export type T =
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
