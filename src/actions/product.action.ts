import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { createAction, props, Store } from '@ngrx/store';
import { LoadMore } from '../constants';
import { SfProduct } from '../models';
import { SfState } from '../reducers';

export enum ProductActionType {
  GetProduct = '[Product] Get Product',
  GetProducts = '[Product] Get Products',
}

interface ProductParams {
  product: SfProduct;
}

interface GetProductsParams extends LoadMore {
  params: Params;
}

export const ProductAction = {
  getProduct: createAction(ProductActionType.GetProduct, props<ProductParams>()),
  getProducts: createAction(ProductActionType.GetProducts, props<GetProductsParams>()),
}

@Injectable({ providedIn: 'root' })
export class SfProductAction {
  constructor(
    private readonly store: Store<SfState>,
  ) {}

  getProduct(params: ProductParams): void {
    this.store.dispatch(ProductAction.getProduct(params));
  }

  getProducts(params: GetProductsParams): void {
    this.store.dispatch(ProductAction.getProducts(params));
  }
}
