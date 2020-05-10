import { Injectable } from '@angular/core';
import { META } from '../constants/meta';
import { SfCart } from '../models/cart.model';
import { SfMetaService } from '../services/meta.service';
import { SfCartAction } from './cart.action';

@Injectable({ providedIn: 'root' })
export class SfCheckoutAction {
  constructor(
    private readonly cartAction: SfCartAction,
    private readonly metaService: SfMetaService,
  ) {}

  async fetchView(): Promise<SfCart> {
    const request = this.cartAction.fetchCart();

    Promise.resolve(request)
      .then(() => this.metaService.data = META.checkout)
      .catch(e => console.debug(e));

    return request;
  }
}
