import { Storefront } from './storefront';
import { Customer } from './customer';

export interface Token extends Storefront {
  value: string;
  customer: Customer;
}

export interface AccessToken {
  access_token: string;
}
