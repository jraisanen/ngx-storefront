import { number, string } from '../utils/types';

export class SfOrderItemModel {
  readonly id: number;
  readonly name: string;
  readonly orderId: number;
  readonly qty: number;

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
