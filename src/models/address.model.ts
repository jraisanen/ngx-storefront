import { string } from '../utils/types';

export class SfAddressModel {
  readonly firstName: string;
  readonly lastName: string;
  readonly company: string;
  readonly street1: string;
  readonly street2: string;
  readonly city: string;
  readonly state: string;
  readonly postcode: string;
  readonly country: string;
  readonly email: string;
  readonly phone: string;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.firstName = string(data.firstname);
    this.lastName = string(data.lastname);
    this.company = string(data.company);
    if (data.street) {
      this.street1 = string(data.street[0]);
      this.street2 = string(data.street[1]);
    }
    this.city = string(data.city);
    this.state = string(data.state);
    this.postcode = string(data.postcode);
    this.country = string(data.country);
    this.email = string(data.email);
    this.phone = string(data.phone);
  }
}

export type SfAddress = SfAddressModel;
