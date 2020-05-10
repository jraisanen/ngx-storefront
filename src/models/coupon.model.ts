import { boolean, date, number, string } from '@jraisanen/ngx-core';

export class SfCouponModel {
  readonly key: string = '';
  readonly amount: number = 0;
  readonly type: string = '';
  readonly description: string = '';
  readonly expires: Date = new Date(0);
  readonly usageCount: number = 0;
  readonly usageLimit: number = 0;
  readonly usageLimitPerUser: number = 0;
  readonly usageLimitItems: number = 0;
  readonly freeShipping: boolean = false;
  readonly excludeSaleItems: boolean = false;
  readonly minAmount: number = 0;
  readonly maxAmount: number = 0;

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
