import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfOrder, SfOrderModel } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class SfOrderStore {
  readonly order$: Observable<SfOrder>;
  readonly orders$: Observable<SfOrder[]>;

  private readonly _order$: BehaviorSubject<SfOrder> = new BehaviorSubject<SfOrder>(new SfOrderModel());
  private readonly _orders$: BehaviorSubject<SfOrder[]> = new BehaviorSubject<SfOrder[]>([]);

  constructor() {
    this.order$ = this._order$.asObservable();
    this.orders$ = this._orders$.asObservable();
  }

  get order(): SfOrder {
    return this._order$.getValue();
  }

  set order(order: SfOrder) {
    this._order$.next(new SfOrderModel(order));
  }

  get orders(): SfOrder[] {
    return this._orders$.getValue();
  }

  set orders(orders: SfOrder[]) {
    this._orders$.next(orders.map(order => new SfOrderModel(order)));
  }
}
