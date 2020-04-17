export interface MetaAttributes {
  title: string;
  description: string;
  url: string;
}

export interface Meta {
  account: MetaAttributes;
  blog: MetaAttributes;
  cart: MetaAttributes;
  checkout: MetaAttributes;
  home: MetaAttributes;
  not_found: MetaAttributes;
}
