export class ExtensionAttributes {
  key = '';
  images = [];

  constructor(data?: ExtensionAttributes) {
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
