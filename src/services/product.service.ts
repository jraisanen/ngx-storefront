import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPath } from '../constants';
import { SfProduct, SfProductModel } from '../models';
import { SfState } from '../reducers';
import { selectProduct, selectProducts } from '../selectors';
import { SfApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class SfProductService {
  product$ = this.store.select(selectProduct);
  products$ = this.store.select(selectProducts);

  private _product = new SfProductModel();
  private _products: SfProduct[] = [];

  get product(): SfProduct {
    return this._product;
  }

  get products(): SfProduct[] {
    return this._products;
  }

  constructor(
    private readonly apiService: SfApiService,
    private readonly store: Store<SfState>,
  ) {
    this.product$.subscribe(product => this._product = product as SfProduct);
    this.products$.subscribe(products => this._products = products as SfProduct[]);
  }

  getProduct(product: Partial<SfProduct>): Observable<SfProduct> {
    return this.apiService.getItem(`${ApiPath.Products}/${product.key}`) as Observable<SfProduct>;
  }

  getProducts(params: Params): Observable<SfProduct[]> {
    return this.apiService.getItems(ApiPath.Products, params) as Observable<SfProduct[]>;
  }
}
