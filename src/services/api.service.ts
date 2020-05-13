import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { HEADERS, RequestMethod } from '../constants';
import { SfModel } from '../models';
import { SfEnvironment } from '../types';
import { SfStorageService } from './storage.service';

type T = SfModel | string | boolean;

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

  deleteItem(path: string, headers?: object): Observable<T> {
    const options = { headers: this._headers(headers) };
    return this._request(RequestMethod.Delete, path, options) as Observable<T>;
  }

  getItem(path: string, headers?: object): Observable<T> {
    const options = { headers: this._headers(headers) };
    return this._request(RequestMethod.Get, path, options) as Observable<T>;
  }

  getItems(path: string, params: Params = {}, headers?: object): Observable<T[]> {
    const options = { headers: this._headers(headers) };
    return this._request(RequestMethod.Get, path, options, params) as Observable<T[]>;
  }

  patchItem(path: string, item: Partial<T>, headers?: object): Observable<T> {
    const options = { body: JSON.stringify(item), headers: this._headers(headers) };
    return this._request(RequestMethod.Patch, path, options) as Observable<T>;
  }

  postItem(path: string, item: Partial<T>, headers?: object): Observable<T> {
    const options = { body: JSON.stringify(item), headers: this._headers(headers) };
    return this._request(RequestMethod.Post, path, options) as Observable<T>;
  }

  putItem(path: string, item: Partial<T>, headers?: object): Observable<T> {
    const options = { body: JSON.stringify(item), headers: this._headers(headers) };
    return this._request(RequestMethod.Put, path, options) as Observable<T>;
  }

  private _headers(headers?: object): HttpHeaders {
    return new HttpHeaders(headers !== undefined ? { ...HEADERS, ...headers } : HEADERS);
  }

  private _request(method: RequestMethod, path: string, options?: object, params?: Params): Observable<T | T[]> {
    const url = this._url(this.env.apiUrl, path, params);
    return this.http.request<T | T[]>(method, url, options);
  }

  private _url(baseUrl: string, path: string, params?: object): string {
    const url: URL = new URL(`${baseUrl}/${path}`);
    if (params !== undefined) {
      url.search = new URLSearchParams(params as URLSearchParams).toString();
    }
    return url.toString();
  }
}
