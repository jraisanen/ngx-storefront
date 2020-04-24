import { Base } from './base.model';

export class OrderItem extends Base {
  quantity = 0;

  constructor(data?: OrderItem) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
