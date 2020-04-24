import { SfBaseModel } from './base.model';
import { SfImageModel } from './image.model';
import { SfMetaAttributesModel } from './meta-attributes.model';

export class SfPageModel extends SfBaseModel {
  key = '';
  title = '';
  content = '';
  image = new SfImageModel();
  meta = new SfMetaAttributesModel();

  constructor(data?: SfPage) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfPage = SfPageModel;
