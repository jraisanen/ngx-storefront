import { boolean, number, string } from '@jraisanen/ngx-core';
import { Image, ImageModel } from '@jraisanen/ngx-elements';
import { SfTaxonomy, SfTaxonomyModel } from './taxonomy.model';

export class SfProductModel {
  readonly id: number;
  readonly name: string;
  readonly key: string;
  readonly sku: string;
  readonly description: string;
  readonly price: number;
  readonly onSale: boolean;
  readonly images: Image[];
  readonly taxonomies: SfTaxonomy[];
  readonly categories: SfTaxonomy[];
  readonly brand: string;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.id);
    this.name = string(data.name);
    this.key = string(data.key);
    this.sku = string(data.sku);
    this.description = string(data.description);
    this.price = number(data.price);
    this.onSale = boolean(data.onSale);
    this.images = (data.images || []).map(image => new ImageModel(image));
    this.taxonomies = (data.taxonomies || []).map(taxonomy => new SfTaxonomyModel(taxonomy));
    this.categories = (data.categories || []).map(category => new SfTaxonomyModel(category));
    this.brand = string(data.brand);
  }
}

export type SfProduct = SfProductModel;
