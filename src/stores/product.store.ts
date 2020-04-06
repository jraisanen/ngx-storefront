import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({ providedIn: 'root' })
export class SfProductStore {
  private readonly _product$: BehaviorSubject<Product> = new BehaviorSubject<Product>({} as Product);
  private readonly _products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  readonly product$: Observable<Product> = this._product$.asObservable();
  readonly products$: Observable<Product[]> = this._products$.asObservable();

  get product(): Product {
    return this._product$.getValue();
  }

  set product(product: Product) {
    this._product$.next(product);
  }

  get products(): Product[] {
    return this._products$.getValue();
  }

  set products(products: Product[]) {
    this._products$.next(products);
  }
}
