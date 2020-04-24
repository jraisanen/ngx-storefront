import { Base } from './base.model';
import { Image } from './image.model';

export class Taxonomy extends Base {
  key = '';
  name = '';
  description = '';
  parent = 0;
  type = '';
  image = new Image();
  products = 0;
  level = 0;

  constructor(data?: Taxonomy) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
