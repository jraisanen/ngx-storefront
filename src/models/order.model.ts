import { SfBaseModel } from './base.model';

export class SfOrderModel extends SfBaseModel {
  state = '';
  status = '';
  couponCode = '';
  shippingDescription = '';
  storeId = 0;
  discountAmount = 0;
  grandTotal = 0;
  shippingAmount = 0;
  subtotal = 0;
  taxAmount = 0;
  totalPaid = 0;
  totalQtyOrdered = 0;
  billingAddressId = 0;
  quoteId = 0;
  shippingAddressId = 0;
  orderCurrencyCode = '';
  shippingMethod = '';
  totalItemCount = 0;

  constructor(data?: SfOrder) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfOrder = SfOrderModel;
