import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ApiPath } from '../constants/api';
import { SfOrder } from '../models/order.model';
import { SfApiService } from '../services/api.service';
import { SfOrderStore } from '../stores/order.store';

@Injectable({ providedIn: 'root' })
export class SfOrderAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly orderStore: SfOrderStore,
  ) {}

  async fetchOrder(params: Params): Promise<SfOrder> {
    const path = `${ApiPath.Orders}/${params.key}`;
    const request = this.apiService.getItem(path, this.apiService.authHeaders) as Promise<SfOrder>;

    Promise.resolve(request)
      .then(order => this.orderStore.order = order)
      .catch(e => console.debug(e));

    return request;
  }

  async fetchOrders(params: Params = {}, loadMore?: boolean): Promise<SfOrder[]> {
    const path = ApiPath.Orders;
    const request = this.apiService.getItems(path, params, this.apiService.authHeaders) as Promise<SfOrder[]>;

    Promise.resolve(request)
      .then(orders => this.orderStore.orders = loadMore ? [...this.orderStore.orders, ...orders] : orders)
      .catch(e => console.debug(e));

    return request;
  }
}
