import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfCart, SfCartModel } from '../models/cart.model';

@Injectable({ providedIn: 'root' })
export class SfCartStore {
  private readonly _cart$: BehaviorSubject<SfCart> = new BehaviorSubject<SfCart>(new SfCartModel());

  readonly cart$: Observable<SfCart> = this._cart$.asObservable();

  get cart(): SfCart {
    return this._cart$.getValue();
  }

  set cart(cart: SfCart) {
    this._cart$.next(new SfCartModel(cart));
  }
}
