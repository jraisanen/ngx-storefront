import { number, string } from '../utils/types';

export class SfConfigModel {
  readonly id: number;
  readonly code: string;
  readonly websiteId: number;
  readonly name: string;
  readonly locale: string;
  readonly currencyCode: string;
  readonly timezone: string;
  readonly weightUnit: string;
  readonly baseUrl: string;
  readonly baseMediaUrl: string;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.id);
    this.code = string(data.code);
    this.websiteId = number(data.websiteId);
    this.name = string(data.name);
    this.locale = string(data.locale);
    this.currencyCode = string(data.currencyCode);
    this.timezone = string(data.timezone);
    this.weightUnit = string(data.weightUnit);
    this.baseUrl = string(data.baseUrl);
    this.baseMediaUrl = string(data.baseMediaUrl);
  }
}

export type SfConfig = SfConfigModel;
