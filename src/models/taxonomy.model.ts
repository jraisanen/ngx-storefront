import { SfImage, SfImageModel } from './image.model';
import { number, string } from '../utils/types';

export class SfTaxonomyModel {
  readonly id: number;
  readonly key: string;
  readonly name: string;
  readonly description: string;
  readonly parent: number;
  readonly type: string;
  readonly image: SfImage;
  readonly products: number;
  readonly level: number;

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
    this.image = new SfImageModel(data.image);
    this.products = number(data.products);
    this.level = number(data.level);
  }
}

export type SfTaxonomy = SfTaxonomyModel;
