export class SfMetaAttributesModel {
  title = '';
  description = '';
  url = '';

  constructor(data?: SfMetaAttributes) {
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfMetaAttributes = SfMetaAttributesModel;
