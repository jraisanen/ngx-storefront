import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class SfOrderStore {
  private readonly _order$: BehaviorSubject<Order> = new BehaviorSubject<Order>(new Order());
  private readonly _orders$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  readonly order$: Observable<Order> = this._order$.asObservable();
  readonly orders$: Observable<Order[]> = this._orders$.asObservable();

  get order(): Order {
    return this._order$.getValue();
  }

  set order(order: Order) {
    this._order$.next(new Order(order));
  }

  get orders(): Order[] {
    return this._orders$.getValue();
  }

  set orders(orders: Order[]) {
    this._orders$.next(orders.map(order => new Order(order)));
  }
}
