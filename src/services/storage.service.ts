import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LOCAL_STORAGE, StorageKey } from '../constants';

@Injectable({ providedIn: 'root' })
export class SfStorageService {
  private readonly localStorage: any;

  get accessToken(): string {
    return this.localStorage.getItem(StorageKey.AccessToken) ?? '';
  }

  set accessToken(accessToken: string) {
    this.localStorage.setItem(StorageKey.AccessToken, accessToken);
  }

  get cart(): string {
    return this.localStorage.getItem(StorageKey.Cart) ?? '';
  }

  set cart(cart: string) {
    this.localStorage.setItem(StorageKey.Cart, cart);
  }

  constructor(
    @Inject(PLATFORM_ID) readonly platformId: string,
  ) {
    this.localStorage = platformId === 'browser' ? localStorage : LOCAL_STORAGE;
  }
}
