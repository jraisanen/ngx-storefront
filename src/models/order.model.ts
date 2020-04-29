import { number, string } from '../utils/types';

export class SfOrderModel {
  readonly id: number;
  readonly state: string;
  readonly status: string;
  readonly couponCode: string;
  readonly shippingDescription: string;
  readonly storeId: number;
  readonly discountAmount: number;
  readonly grandTotal: number;
  readonly shippingAmount: number;
  readonly subtotal: number;
  readonly taxAmount: number;
  readonly totalPaid: number;
  readonly totalQtyOrdered: number;
  readonly billingAddressId: number;
  readonly quoteId: number;
  readonly shippingAddressId: number;
  readonly orderCurrencyCode: string;
  readonly shippingMethod: string;
  readonly totalItemCount: number;

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
