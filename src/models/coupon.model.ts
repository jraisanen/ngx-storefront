import { Base } from './base.model';

export class Coupon extends Base {
  key = '';
  amount = 0;
  type = '';
  description = '';
  expires = new Date();
  usageCount = 0;
  usageLimit = 0;
  usageLimitPerUser = 0;
  usageLimitItems = 0;
  freeShipping = false;
  excludeSaleItems = false;
  minAmount = 0;
  maxAmount = 0;

  constructor(data?: Coupon) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
