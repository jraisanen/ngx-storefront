import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../types/cart';

@Injectable({ providedIn: 'root' })
export class SfCartStore {
  private readonly _cart$: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({} as Cart);

  readonly cart$: Observable<Cart> = this._cart$.asObservable();

  get cart(): Cart {
    return this._cart$.getValue();
  }

  set cart(cart: Cart) {
    this._cart$.next(cart);
  }
}
