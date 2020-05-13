import { SfAddress } from './address.model';
import { SfCart } from './cart.model';
import { SfCartItem } from './cart-item.model';
import { SfConfig } from './config.model';
import { SfCoupon } from './coupon.model';
import { SfCustomer } from './customer.model';
import { SfExtensionAttributes } from './extension-attributes.model';
import { SfMetaAttributes } from './meta-attributes.model';
import { SfOrder } from './order.model';
import { SfOrderItem } from './order-item.model';
import { SfProduct } from './product.model';
import { SfTaxonomy } from './taxonomy.model';
import { SfPostCartItem, SfPostCustomer } from '../types';

export * from './address.model';
export * from './cart.model';
export * from './cart-item.model';
export * from './config.model';
export * from './coupon.model';
export * from './customer.model';
export * from './extension-attributes.model';
export * from './meta-attributes.model';
export * from './order.model';
export * from './order-item.model';
export * from './product.model';
export * from './taxonomy.model';

export type SfPost = SfPostCartItem | SfPostCustomer;

export type SfModel =
  SfAddress
  | SfCart
  | SfCartItem
  | SfConfig
  | SfCoupon
  | SfCustomer
  | SfExtensionAttributes
  | SfMetaAttributes
  | SfOrder
  | SfOrderItem
  | SfPost
  | SfProduct
  | SfTaxonomy;
