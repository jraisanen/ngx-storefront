import { string } from '../utils/types';
import { SfImage, SfImageModel } from './image.model';

export class SfExtensionAttributesModel {
  readonly key: string;
  readonly images: SfImage[];
  readonly shippingAssignments: any[];

  constructor(data?: SfExtensionAttributes) {
    if (!data) {
      return;
    }
    this.key = string(data.key);
    this.images = (data.images || []).map(image => new SfImageModel(image));
    this.shippingAssignments = (data.shippingAssignments || []).map(shippingAssignment => shippingAssignment);
  }
}

export type SfExtensionAttributes = SfExtensionAttributesModel;
