import { Address } from './address';
import { Image } from './image';
import { Order } from './order';
import { Storefront } from './storefront';
import { Token } from './token';

export interface User extends Storefront {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  avatar: Partial<Image>;
  orders?: Order[];
  tokens?: Token[];
  billingAddress?: Address;
  shippingAddress?: Address;
}