import { Image } from './image.model';
import { MetaAttributes } from './meta-attributes.model';
import { Base } from './base.model';

export class Page extends Base {
  key = '';
  title = '';
  content = '';
  image = new Image();
  meta = new MetaAttributes();

  constructor(data?: Page) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
