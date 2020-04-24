import { SfBaseModel } from './base.model';

export class SfAddressModel extends SfBaseModel {
  firstName = '';
  lastName = '';
  company = '';
  street1 = '';
  street2 = '';
  city = '';
  state = '';
  postcode = '';
  country = '';
  email = '';
  phone = '';

  constructor(data?: SfAddress) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfAddress = SfAddressModel;
