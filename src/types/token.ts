import { Storefront } from './storefront';
import { User } from './user';

export interface Token extends Storefront {
  value: string;
  user: User;
}

export interface AccessToken {
  access_token: string;
}
