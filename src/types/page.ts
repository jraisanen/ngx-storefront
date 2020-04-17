import { Image } from './image';
import { Storefront } from './storefront';
import { MetaAttributes } from './meta';

export interface Page extends Storefront {
  key: string;
  title: string;
  content: string;
  image?: Image;
  meta: MetaAttributes;
}
