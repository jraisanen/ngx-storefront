import { Image } from './image';
import { Storefront } from './storefront';

export interface Page extends Storefront {
  key: string;
  title: string;
  content: string;
  image?: Image;
}
