export class SfExtensionAttributesModel {
  key = '';
  images = [];

  constructor(data?: SfExtensionAttributes) {
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfExtensionAttributes = SfExtensionAttributesModel;
