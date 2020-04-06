import { Currency } from '../constants/currency';
import { Storefront } from './storefront';

export interface CartItem extends Storefront {
  item_id: number;
  quote: number;
  sku: string;
  name: string;
  price: number;
  qty: number;
  extension_attributes: {
    key: string;
    images: string[];
  };
}

export interface Cart extends Storefront {
  key: string;
  couponCode: string;
  currency: Currency;
  items: CartItem[];
  billing_address: any;
  extension_attributes: any;
}

export interface PostCartItem {
  cartItem: {
    quoteId: string;
    sku: string;
    qty: number;
  };
}
