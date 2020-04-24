export class Config {
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

  constructor(data?: Config) {
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
