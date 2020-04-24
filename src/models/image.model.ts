export class SfImageModel {
  src = '';
  alt = '';

  constructor(data?: SfImage) {
    Object.keys(data || {}).forEach(key => this[key] !== undefined && (this[key] = data[key]));
  }
}

export type SfImage = SfImageModel;
