import { Address } from './address.model';
import { ExtensionAttributes } from './extension-attributes.model';
import { Base } from './base.model';

export class Cart extends Base {
  key = '';
  couponCode = '';
  currency = '';
  items = [];
  billing_address = new Address();
  extension_attributes = new ExtensionAttributes();

  constructor(data?: Cart) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
