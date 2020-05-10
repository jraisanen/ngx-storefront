import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfProduct, SfProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class SfProductStore {
  readonly product$: Observable<SfProduct>;
  readonly products$: Observable<SfProduct[]>;

  private readonly _product$: BehaviorSubject<SfProduct> = new BehaviorSubject<SfProduct>(new SfProductModel());
  private readonly _products$: BehaviorSubject<SfProduct[]> = new BehaviorSubject<SfProduct[]>([]);

  constructor() {
    this.product$ = this._product$.asObservable();
    this.products$ = this._products$.asObservable();
  }

  get product(): SfProduct {
    return this._product$.getValue();
  }

  set product(product: SfProduct) {
    this._product$.next(new SfProductModel(product));
  }

  get products(): SfProduct[] {
    return this._products$.getValue();
  }

  set products(products: SfProduct[]) {
    this._products$.next(products.map(product => new SfProductModel(product)));
  }
}
