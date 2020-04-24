import { SfBaseModel } from './base.model';

export class SfCustomerModel extends SfBaseModel {
  firstName = '';
  lastName = '';
  phone = '';
  email = '';
  username = '';
  password = '';

  constructor(data?: SfCustomer) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfCustomer = SfCustomerModel;
