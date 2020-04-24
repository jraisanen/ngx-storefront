import { Inject, Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HEADERS, RequestMethod } from '../constants/api';
import { SfEnvironment } from '../types/environment';
import { T } from '../types/storefront';
import { SfStorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SfApiService {
  get authHeaders(): object {
    return this.storageService.accessToken ? { Authorization: `Bearer ${this.storageService.accessToken}` } : {};
  }

  constructor(
    @Inject('env') private readonly env: SfEnvironment,
    private readonly storageService: SfStorageService,
  ) {}

  deleteItem(path: string, headers?: object): Promise<T> {
    const init = { headers: this._headers(headers), method: RequestMethod.Delete };
    return this._request(path, init) as Promise<T>;
  }

  getItem(path: string, headers?: object): Promise<T> {
    const init = { headers: this._headers(headers), method: RequestMethod.Get };
    return this._request(path, init) as Promise<T>;
  }

  getItems(path: string, params: Params = {}, headers?: object): Promise<T[]> {
    const init = { headers: this._headers(headers), method: RequestMethod.Get };
    return this._request(path, init, params) as Promise<T[]>;
  }

  patchItem(path: string, item: Partial<T>, headers?: object): Promise<T> {
    const init = { body: JSON.stringify(item), headers: this._headers(headers), method: RequestMethod.Patch };
    return this._request(path, init) as Promise<T>;
  }

  postItem(path: string, item: Partial<T>, headers?: object): Promise<T> {
    const init = { body: JSON.stringify(item), headers: this._headers(headers), method: RequestMethod.Post };
    return this._request(path, init) as Promise<T>;
  }

  putItem(path: string, item: Partial<T>, headers?: object): Promise<T> {
    const init = { body: JSON.stringify(item), headers: this._headers(headers), method: RequestMethod.Put };
    return this._request(path, init) as Promise<T>;
  }

  private _headers(headers?: object): Headers {
    return new Headers(headers ? { ...HEADERS, ...headers } : HEADERS);
  }

  private async _request(path: string, init?: RequestInit, params?: Params): Promise<T | T[]> {
    try {
      const response = await fetch(this._url(this.env.apiUrl, path, params), init);
      if (response.ok) {
        const data = await response.json();
        if (data instanceof Array && !params) {
          return data[0] || {};
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
