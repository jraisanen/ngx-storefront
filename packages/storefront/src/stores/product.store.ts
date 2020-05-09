import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfProduct, SfProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class SfProductStore {
  private readonly _product$: BehaviorSubject<SfProduct> = new BehaviorSubject<SfProduct>(new SfProductModel());
  private readonly _products$: BehaviorSubject<SfProduct[]> = new BehaviorSubject<SfProduct[]>([]);

  readonly product$: Observable<SfProduct> = this._product$.asObservable();
  readonly products$: Observable<SfProduct[]> = this._products$.asObservable();

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
