export class Image {
  src = '';
  alt = '';

  constructor(data?: Image) {
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}
