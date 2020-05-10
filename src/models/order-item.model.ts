import { number, string } from '@jraisanen/ngx-core';

export class SfOrderItemModel {
  readonly id: number = 0;
  readonly name: string = '';
  readonly orderId: number = 0;
  readonly qty: number = 0;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.id);
    this.name = string(data.name);
    this.orderId = number(data.orderId);
    this.qty = number(data.qty);
  }
}

export type SfOrderItem = SfOrderItemModel;
