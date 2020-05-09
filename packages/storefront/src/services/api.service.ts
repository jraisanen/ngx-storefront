import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    private readonly http: HttpClient,
    private readonly storageService: SfStorageService,
  ) {}

  deleteItem(path: string, headers?: object): Promise<T> {
    const options = { headers: this._headers(headers) };
    return this._request(RequestMethod.Delete, path, options) as Promise<T>;
  }

  getItem(path: string, headers?: object): Promise<T> {
    const options = { headers: this._headers(headers) };
    return this._request(RequestMethod.Get, path, options) as Promise<T>;
  }

  getItems(path: string, params: Params = {}, headers?: object): Promise<T[]> {
    const options = { headers: this._headers(headers) };
    return this._request(RequestMethod.Get, path, options, params) as Promise<T[]>;
  }

  patchItem(path: string, item: Partial<T>, headers?: object): Promise<T> {
    const options = { body: JSON.stringify(item), headers: this._headers(headers) };
    return this._request(RequestMethod.Patch, path, options) as Promise<T>;
  }

  postItem(path: string, item: Partial<T>, headers?: object): Promise<T> {
    const options = { body: JSON.stringify(item), headers: this._headers(headers) };
    return this._request(RequestMethod.Post, path, options) as Promise<T>;
  }

  putItem(path: string, item: Partial<T>, headers?: object): Promise<T> {
    const options = { body: JSON.stringify(item), headers: this._headers(headers) };
    return this._request(RequestMethod.Put, path, options) as Promise<T>;
  }

  private _headers(headers?: object): HttpHeaders {
    return new HttpHeaders(headers ? { ...HEADERS, ...headers } : HEADERS);
  }

  private async _request(method: RequestMethod, path: string, options?: object, params?: Params): Promise<T | T[]> {
    try {
      const url = this._url(this.env.apiUrl, path, params);
      const response = await this.http.request<T | T[]>(method, url, options).toPromise();
      return response instanceof Array && !params ? (response[0] || {} as T) : response;
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
