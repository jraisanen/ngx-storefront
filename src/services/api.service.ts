import { Inject, Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { RequestMethod } from '../constants/api';
import { Environment } from '../types/environment';
import { T } from '../types/storefront';
import { SfStorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SfApiService {
  private get _headers(): Headers {
    return new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${this.storageService.accessToken}`,
      'Content-Type': 'application/json',
    });
  }

  constructor(
    @Inject('env') private readonly env: Environment,
    private readonly storageService: SfStorageService,
  ) {}

  async deleteItem(path: string): Promise<T> {
    const init = { headers: this._headers, method: RequestMethod.Delete };
    return (await this._request(path, init)) as T;
  }

  async getItem(path: string): Promise<T> {
    const init = { headers: this._headers, method: RequestMethod.Get };
    return (await this._request(path, init)) as T;
  }

  async getItems(path: string, params: Params = {}): Promise<T[]> {
    const init = { headers: this._headers, method: RequestMethod.Get };
    return (await this._request(path, init, params)) as T[];
  }

  async patchItem(path: string, item: Partial<T>): Promise<T> {
    const init = { body: JSON.stringify(item), headers: this._headers, method: RequestMethod.Patch };
    return (await this._request(path, init)) as T;
  }

  async postItem(path: string, item: Partial<T>): Promise<T> {
    const init = { body: JSON.stringify(item), headers: this._headers, method: RequestMethod.Post };
    return (await this._request(path, init)) as T;
  }

  async putItem(path: string, item: Partial<T>): Promise<T> {
    const init = { body: JSON.stringify(item), headers: this._headers, method: RequestMethod.Put };
    return (await this._request(path, init)) as T;
  }

  private async _request(path: string, init?: RequestInit, params?: Params): Promise<T | T[]> {
    try {
      const response = await fetch(this._url(this.env.apiUrl, path, params), init);
      if (response.ok) {
        const data = await response.json();
        const isArray = data instanceof Array;
        if (isArray && !params) {
          return data[0];
        }
        return data;
      }
    } catch (e) {
      console.debug(e);
    }
    return params ? [] : ({} as T);
  }

  private _url(baseUrl: string, path: string, params?: object): string {
    const url: URL = new URL(`${baseUrl}/${path}`);
    if (params) {
      url.search = new URLSearchParams(params as URLSearchParams).toString();
    }
    return url.toString();
  }
}
