import { number, string } from '@jraisanen/ngx-core';

export class SfOrderModel {
  readonly id: number = 0;
  readonly state: string = '';
  readonly status: string = '';
  readonly couponCode: string = '';
  readonly shippingDescription: string = '';
  readonly storeId: number = 0;
  readonly discountAmount: number = 0;
  readonly grandTotal: number = 0;
  readonly shippingAmount: number = 0;
  readonly subtotal: number = 0;
  readonly taxAmount: number = 0;
  readonly totalPaid: number = 0;
  readonly totalQtyOrdered: number = 0;
  readonly billingAddressId: number = 0;
  readonly quoteId: number = 0;
  readonly shippingAddressId: number = 0;
  readonly orderCurrencyCode: string = '';
  readonly shippingMethod: string = '';
  readonly totalItemCount: number = 0;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.id);
    this.state = string(data.state);
    this.status = string(data.status);
    this.couponCode = string(data.couponCode);
    this.shippingDescription = string(data.shippingDescription);
    this.storeId = number(data.storeId);
    this.discountAmount = number(data.discountAmount);
    this.grandTotal = number(data.grandTotal);
    this.shippingAmount = number(data.shippingAmount);
    this.subtotal = number(data.subtotal);
    this.taxAmount = number(data.taxAmount);
    this.totalPaid = number(data.totalPaid);
    this.totalQtyOrdered = number(data.totalQtyOrdered);
    this.billingAddressId = number(data.billingAddressId);
    this.quoteId = number(data.quoteId);
    this.shippingAddressId = number(data.shippingAddressId);
    this.orderCurrencyCode = string(data.orderCurrencyCode);
    this.shippingMethod = string(data.shippingMethod);
    this.totalItemCount = number(data.totalItemCount);
  }
}

export type SfOrder = SfOrderModel;
