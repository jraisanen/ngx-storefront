import { string } from '../utils/types';

export class SfImageModel {
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

export type SfImage = SfImageModel;
