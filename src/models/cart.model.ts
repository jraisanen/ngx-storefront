import { boolean, number, string } from '@jraisanen/ngx-core';
import { SfAddress, SfAddressModel } from './address.model';
import { SfCartItem, SfCartItemModel } from './cart-item.model';
import { SfCustomer, SfCustomerModel } from './customer.model';
import { SfExtensionAttributes, SfExtensionAttributesModel } from './extension-attributes.model';

export class SfCartModel {
  readonly id: number = 0;
  readonly billingAddress: SfAddress = new SfAddressModel();
  readonly currency: string = '';
  readonly customer: SfCustomer = new SfCustomerModel();
  readonly extensionAttributes: SfExtensionAttributes = new SfExtensionAttributesModel();
  readonly isGuest: boolean = true;
  readonly items: SfCartItem[] = [];

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.id);
    this.billingAddress = new SfAddressModel(data.billing_address);
    if (data.currency) {
      this.currency = string(data.currency.quote_currency_code);
    }
    this.customer = new SfCustomerModel(data.customer);
    this.extensionAttributes = new SfExtensionAttributesModel(data.extension_attributes);
    this.isGuest = boolean(data.customer_is_guest);
    this.items = (data.items || []).map((item: object) => new SfCartItemModel(item));
  }
}

export type SfCart = SfCartModel;
