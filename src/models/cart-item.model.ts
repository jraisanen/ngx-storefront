import { ExtensionAttributes } from './extension-attributes.model';
import { Base } from './base.model';

export class CartItem extends Base {
  item_id = 0;
  quote = 0;
  sku = '';
  name = '';
  price = 0;
  qty = 0;
  extension_attributes = new ExtensionAttributes();

  constructor(data?: CartItem) {
    super();
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
