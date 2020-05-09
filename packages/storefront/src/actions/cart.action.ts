import { Injectable } from '@angular/core';
import { ApiPath } from '../constants/api';
import { META } from '../constants/meta';
import { SfCart } from '../models/cart.model';
import { SfApiService } from '../services/api.service';
import { SfMetaService } from '../services/meta.service';
import { SfStorageService } from '../services/storage.service';
import { SfCartStore } from '../stores/cart.store';

@Injectable({ providedIn: 'root' })
export class SfCartAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly cartStore: SfCartStore,
    private readonly metaService: SfMetaService,
    private readonly storageService: SfStorageService,
  ) {}

  fetchCart(): Promise<SfCart> {
    const request = this.apiService.getItem(`${ApiPath.GuestCarts}/${this.storageService.cart}`) as Promise<SfCart>;

    Promise.resolve(request)
      .then(cart => this.cartStore.cart = cart)
      .catch(e => console.debug(e));

    return request;
  }

  fetchView(): Promise<SfCart> {
    const request = this.fetchCart() as Promise<SfCart>;

    Promise.resolve(request)
      .then(() => this.metaService.data = META.cart)
      .catch(e => console.debug(e));

    return request;
  }
}
