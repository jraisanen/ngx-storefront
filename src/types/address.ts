import { Storefront } from './storefront';

export interface Address extends Storefront {
  firstName: string;
  lastName: string;
  company: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}
