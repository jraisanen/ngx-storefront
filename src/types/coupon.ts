import { Storefront } from './storefront';

export interface Coupon extends Storefront {
  key: string;
  amount: number;
  type: string;
  description: string;
  expires: Date;
  usageCount: number;
  usageLimit: number;
  usageLimitPerUser: number;
  usageLimitItems: number;
  freeShipping: boolean;
  excludeSaleItems: boolean;
  minAmount: number;
  maxAmount: number;
}
