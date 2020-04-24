import { SfBaseModel } from './base.model';

export class SfProductModel extends SfBaseModel {
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

  constructor(data?: SfProduct) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfProduct = SfProductModel;
