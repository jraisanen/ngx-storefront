import { boolean, date, number, string } from '../utils/types';

export class SfCouponModel {
  readonly key: string;
  readonly amount: number;
  readonly type: string;
  readonly description: string;
  readonly expires: Date;
  readonly usageCount: number;
  readonly usageLimit: number;
  readonly usageLimitPerUser: number;
  readonly usageLimitItems: number;
  readonly freeShipping: boolean;
  readonly excludeSaleItems: boolean;
  readonly minAmount: number;
  readonly maxAmount: number;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.key = string(data.key);
    this.amount = number(data.amount);
    this.type = string(data.type);
    this.description = string(data.description);
    this.expires = date(data.expires);
    this.usageCount = number(data.usageCount);
    this.usageLimit = number(data.usageLimit);
    this.usageLimitPerUser = number(data.usageLimitPerUser);
    this.usageLimitItems = number(data.usageLimitItems);
    this.freeShipping = boolean(data.freeShipping);
    this.excludeSaleItems = boolean(data.excludeSaleItems);
    this.minAmount = number(data.minAmount);
    this.maxAmount = number(data.maxAmount);
  }
}

export type SfCoupon = SfCouponModel;
