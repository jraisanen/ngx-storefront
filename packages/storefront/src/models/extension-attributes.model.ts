import { string } from '@jraisanen/ngx-core';
import { Image, ImageModel } from '@jraisanen/ngx-elements';

export class SfExtensionAttributesModel {
  readonly key: string;
  readonly images: Image[];
  readonly shippingAssignments: any[];

  constructor(data?: SfExtensionAttributes) {
    if (!data) {
      return;
    }
    this.key = string(data.key);
    this.images = (data.images || []).map(image => new ImageModel(image));
    this.shippingAssignments = (data.shippingAssignments || []).map(shippingAssignment => shippingAssignment);
  }
}

export type SfExtensionAttributes = SfExtensionAttributesModel;
