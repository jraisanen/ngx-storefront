import { number, string } from '../utils/types';
import { SfImage, SfImageModel } from './image.model';

export class SfCartItemModel {
  readonly id: number;
  readonly cartId: number;
  readonly images: SfImage[];
  readonly key: string;
  readonly name: string;
  readonly price: number;
  readonly qty: number;
  readonly sku: string;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.item_id);
    this.cartId = number(data.quote_id);
    if (data.extension_attributes) {
      this.images = (data.extension_attributes.images || []).map(image => new SfImageModel(image));
      this.key = string(data.extension_attributes.key);
    }
    this.name = string(data.name);
    this.price = number(data.price);
    this.qty = number(data.qty);
    this.sku = string(data.sku);
  }
}

export type SfCartItem = SfCartItemModel;
