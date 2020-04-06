import { Meta } from '../types/meta';

export const META: Meta = {
  account: {
    title: 'Account',
    description: 'Account',
    url: 'account',
  },
  blog: {
    title: 'Blog',
    description: 'Blog',
    url: 'blog',
  },
  cart: {
    title: 'Cart',
    description: 'Cart',
    url: 'cart',
  },
  checkout: {
    title: 'Checkout',
    description: 'Checkout',
    url: 'checkout',
  },
  home: {
    title: 'Storefront',
    description: 'Storefront',
    url: '',
  },
  not_found: {
    title: `Page not found`,
    description: 'Page not found.',
    url: '',
  },
};

export enum MetaTag {
  Description = 'description',
  Name = 'name',
  OgDescription = 'og:description',
  OgTitle = 'og:title',
  OgUrl = 'og:url',
}
