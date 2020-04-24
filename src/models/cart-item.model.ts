import { SfBaseModel } from './base.model';
import { SfExtensionAttributesModel } from './extension-attributes.model';

export class SfCartItemModel extends SfBaseModel {
  item_id = 0;
  quote = 0;
  sku = '';
  name = '';
  price = 0;
  qty = 0;
  extension_attributes = new SfExtensionAttributesModel();

  constructor(data?: SfCartItem) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfCartItem = SfCartItemModel;
