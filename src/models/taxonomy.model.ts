import { number, string } from '@jraisanen/ngx-core';
import { Image, ImageModel } from '@jraisanen/ngx-elements';

export class SfTaxonomyModel {
  readonly id: number = 0;
  readonly key: string = '';
  readonly name: string = '';
  readonly description: string = '';
  readonly parent: number = 0;
  readonly type: string = '';
  readonly image: Image = new ImageModel();
  readonly products: number = 0;
  readonly level: number = 0;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.id);
    this.key = string(data.key);
    this.name = string(data.name);
    this.description = string(data.description);
    this.parent = number(data.parent);
    this.type = string(data.type);
    this.image = new ImageModel(data.image);
    this.products = number(data.products);
    this.level = number(data.level);
  }
}

export type SfTaxonomy = SfTaxonomyModel;
