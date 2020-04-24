import { SfCart } from '../models/cart.model';
import { SfCartItem } from '../models/cart-item.model';
import { SfConfig } from '../models/config.model';
import { SfCustomer } from '../models/customer.model';
import { SfOrder } from '../models/order.model';
import { SfOrderItem } from '../models/order-item.model';
import { SfPage } from '../models/page.model';
import { SfProduct } from '../models/product.model';
import { SfTaxonomy } from '../models/taxonomy.model';
import { SfPostCartItem } from './cart';
import { SfPostCustomer } from './customer';

export type T =
  | SfCart
  | SfCartItem
  | SfConfig
  | SfCustomer
  | SfOrder
  | SfOrderItem
  | SfPage
  | SfProduct
  | SfTaxonomy
  | SfPostCartItem
  | SfPostCustomer
  | boolean
  | string;
