import { Currency } from '../constants/currency';
import { OrderStatus, PaymentMethod, ShippingMethod } from '../constants/order';
import { Address } from './address';
import { Coupon } from './coupon';
import { Storefront } from './storefront';
import { User } from './user';

export interface OrderItem extends Storefront {
  quantity: number;
}

export interface Order extends Storefront {
  key: string;
  currency: Currency;
  status: OrderStatus;
  discountTotal: number;
  discountTax: number;
  shippingTotal: number;
  shippingTax: number;
  cartTax: number;
  total: number;
  totalTax: number;
  pricesIncludeTax: boolean;
  customer: User;
  billingAddress: Address;
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  shippingMethod: ShippingMethod;
  datePaid: Date;
  dateCompleted: Date;
  items: OrderItem[];
  coupons: Coupon[];
}
