import { Image } from './image';
import { Storefront } from './storefront';

export interface Taxonomy extends Storefront {
  key: string;
  name: string;
  description: string;
  parent: number;
  type: string;
  image: Image;
  products: number;
  level: number;
}
