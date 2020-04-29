import { number, string } from '../utils/types';
import { SfImage, SfImageModel } from './image.model';
import { SfMetaAttributes, SfMetaAttributesModel } from './meta-attributes.model';

export class SfPageModel {
  readonly id: number;
  readonly key: string;
  readonly title: string;
  readonly content: string;
  readonly image: SfImage;
  readonly meta: SfMetaAttributes;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.id);
    this.key = string(data.key);
    this.title = string(data.title);
    this.content = string(data.content);
    this.image = new SfImageModel(data.image);
    this.meta = new SfMetaAttributesModel(data.meta);
  }
}

export type SfPage = SfPageModel;
