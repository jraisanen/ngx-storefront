export class SfConfigModel {
  id = 0;
  code = '';
  websiteId = 0;
  name = '';
  locale = '';
  currencyCode = '';
  timezone = '';
  weightUnit = '';
  baseUrl = '';
  baseMediaUrl = '';

  constructor(data?: SfConfig) {
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfConfig = SfConfigModel;
