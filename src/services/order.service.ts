import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPath } from '../constants';
import { SfOrder, SfOrderModel } from '../models';
import { SfState } from '../reducers';
import { selectOrder, selectOrders } from '../selectors';
import { SfApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class SfOrderService {
  order$ = this.store.select(selectOrder);
  orders$ = this.store.select(selectOrders);

  private _order = new SfOrderModel();
  private _orders: SfOrder[] = [];

  get order(): SfOrder {
    return this._order;
  }

  get orders(): SfOrder[] {
    return this._orders;
  }

  constructor(
    private readonly apiService: SfApiService,
    private readonly store: Store<SfState>,
  ) {
    this.order$.subscribe(order => this._order = order as SfOrder);
    this.orders$.subscribe(orders => this._orders = orders as SfOrder[]);
  }

  getOrder(order: Partial<SfOrder>): Observable<SfOrder> {
    return this.apiService.getItem(`${ApiPath.Orders}/${order.id}`, this.apiService.authHeaders) as Observable<SfOrder>;
  }

  getOrders(params: Params): Observable<SfOrder[]> {
    return this.apiService.getItems(ApiPath.Orders, params, this.apiService.authHeaders) as Observable<SfOrder[]>;
  }
}
