import { Injectable } from '@angular/core';
import { META } from '../constants/meta';
import { SfMetaService } from '../services/meta.service';
import { Cart } from '../types/cart';
import { SfCartAction } from './cart.action';

@Injectable({ providedIn: 'root' })
export class SfCheckoutAction {
  constructor(
    private readonly cartAction: SfCartAction,
    private readonly metaService: SfMetaService,
  ) {}

  fetchView(): Promise<Cart> {
    const request = this.cartAction.fetchCart() as Promise<Cart>;

    Promise.resolve(request)
      .then(() => this.metaService.data = META.checkout)
      .catch(e => console.debug(e));

    return request;
  }
}
