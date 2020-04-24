import { Base } from './base.model';

export class Customer extends Base {
  firstName = '';
  lastName = '';
  phone = '';
  email = '';
  username = '';
  password = '';

  constructor(data?: Customer) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
