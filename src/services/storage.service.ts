import { Injectable } from '@angular/core';
import { StorageKey } from '../constants/storage';

@Injectable({ providedIn: 'root' })
export class SfStorageService {
  get accessToken(): string {
    return localStorage.getItem(StorageKey.AccessToken) ?? '';
  }

  set accessToken(accessToken: string) {
    localStorage.setItem(StorageKey.AccessToken, accessToken);
  }

  get cart(): string {
    return localStorage.getItem(StorageKey.Cart) ?? '';
  }

  set cart(cart: string) {
    localStorage.setItem(StorageKey.Cart, cart);
  }
}
