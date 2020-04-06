import { Injectable } from '@angular/core';
import { ApiPath } from '../constants/api';
import { META } from '../constants/meta';
import { SfApiService } from '../services/api.service';
import { SfMetaService } from '../services/meta.service';
import { SfStorageService } from '../services/storage.service';
import { SfCartStore } from '../stores/cart.store';
import { Cart } from '../types/cart';

@Injectable({ providedIn: 'root' })
export class SfCartAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly cartStore: SfCartStore,
    private readonly metaService: SfMetaService,
    private readonly storageService: SfStorageService,
  ) {}

  fetchCart(): Promise<Cart> {
    const request = this.apiService.getItem(`${ApiPath.GuestCarts}/${this.storageService.cart}`) as Promise<Cart>;

    Promise.resolve(request)
      .then(cart => this.cartStore.cart = cart)
      .catch(e => console.debug(e));

    return request;
  }

  fetchView(): Promise<Cart> {
    const request = this.fetchCart() as Promise<Cart>;

    Promise.resolve(request)
      .then(() => this.metaService.data = META.cart)
      .catch(e => console.debug(e));

    return request;
  }
}
