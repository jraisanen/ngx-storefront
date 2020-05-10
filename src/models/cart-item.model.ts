import { number, string } from '@jraisanen/ngx-core';
import { Image, ImageModel } from '@jraisanen/ngx-elements';

export class SfCartItemModel {
  readonly id: number = 0;
  readonly cartId: number = 0;
  readonly images: Image[] = [];
  readonly key: string = '';
  readonly name: string = '';
  readonly price: number = 0;
  readonly qty: number = 0;
  readonly sku: string = '';

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.item_id);
    this.cartId = number(data.quote_id);
    if (data.extension_attributes) {
      this.images = (data.extension_attributes.images || []).map((image: object) => new ImageModel(image));
      this.key = string(data.extension_attributes.key);
    }
    this.name = string(data.name);
    this.price = number(data.price);
    this.qty = number(data.qty);
    this.sku = string(data.sku);
  }
}

export type SfCartItem = SfCartItemModel;
