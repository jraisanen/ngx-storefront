import { string } from '@jraisanen/ngx-core';

export class ImageModel {
  readonly src: string;
  readonly alt: string;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.src = string(data.src || data);
    this.alt = string(data.alt);
  }
}

export type Image = ImageModel;
