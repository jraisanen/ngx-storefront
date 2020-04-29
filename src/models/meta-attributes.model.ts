import { string } from '../utils/types';

export class SfMetaAttributesModel {
  readonly title: string;
  readonly description: string;
  readonly url: string;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.title = string(data.title);
    this.description = string(data.description);
    this.url = string(data.url);
  }
}

export type SfMetaAttributes = SfMetaAttributesModel;
