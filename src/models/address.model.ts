import { Base } from './base.model';

export class Address extends Base {
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

  constructor(data?: Address) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
