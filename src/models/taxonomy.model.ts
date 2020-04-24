import { SfBaseModel } from './base.model';
import { SfImageModel } from './image.model';

export class SfTaxonomyModel extends SfBaseModel {
  key = '';
  name = '';
  description = '';
  parent = 0;
  type = '';
  image = new SfImageModel();
  products = 0;
  level = 0;

  constructor(data?: SfTaxonomy) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfTaxonomy = SfTaxonomyModel;
