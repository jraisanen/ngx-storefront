import { Image } from './image';
import { Storefront } from './storefront';
import { Taxonomy } from './taxonomy';

export interface Product extends Storefront {
  name: string;
  key: string;
  sku: string;
  description: string;
  price: number;
  onSale: boolean;
  images: Image[];
  taxonomies: Taxonomy[];
  categories: Taxonomy[];
  brand: string;
}
