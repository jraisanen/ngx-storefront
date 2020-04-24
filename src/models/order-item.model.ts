import { SfBaseModel } from './base.model';

export class SfOrderItemModel extends SfBaseModel {
  quantity = 0;

  constructor(data?: SfOrderItem) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfOrderItem = SfOrderItemModel;
