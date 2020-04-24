import { Base } from './base.model';

export class Product extends Base {
  name = '';
  key = '';
  sku = '';
  description = '';
  price = 0;
  onSale = false;
  images = [];
  taxonomies = [];
  categories = [];
  brand = '';

  constructor(data?: Product) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
