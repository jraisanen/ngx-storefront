export class MetaAttributes {
  title = '';
  description = '';
  url = '';

  constructor(data?: MetaAttributes) {
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
