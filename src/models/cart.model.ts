import { SfAddressModel } from './address.model';
import { SfBaseModel } from './base.model';
import { SfExtensionAttributesModel } from './extension-attributes.model';

export class SfCartModel extends SfBaseModel {
  key = '';
  couponCode = '';
  currency = '';
  items = [];
  billing_address = new SfAddressModel();
  extension_attributes = new SfExtensionAttributesModel();

  constructor(data?: SfCart) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfCart = SfCartModel;
