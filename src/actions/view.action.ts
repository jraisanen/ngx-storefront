import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { createAction, props, Store } from '@ngrx/store';
import { SfProduct } from '../models';
import { SfState } from '../reducers';

export enum ViewActionType {
  GetAccountView = '[View] Get Account View',
  GetCartView = '[View] Get Cart View',
  GetCatalogView = '[View] Get Catalog View',
  GetCheckoutView = '[View] Get Checkout View',
  GetProductView = '[View] Get Product View',
}

interface CatalogViewParams {
  params?: Params;
  routeParams: Params;
}

interface ProductViewParams {
  product: SfProduct;
}

export const ViewAction = {
  getAccountView: createAction(ViewActionType.GetAccountView),
  getCartView: createAction(ViewActionType.GetCartView),
  getCatalogView: createAction(ViewActionType.GetCatalogView, props<CatalogViewParams>()),
  getCheckoutView: createAction(ViewActionType.GetCheckoutView),
  getProductView: createAction(ViewActionType.GetProductView, props<ProductViewParams>()),
}

@Injectable({ providedIn: 'root' })
export class SfViewAction {
  constructor(
    private readonly store: Store<SfState>,
  ) {}

  getAccountView(): void {
    this.store.dispatch(ViewAction.getAccountView());
  }

  getCartView(): void {
    this.store.dispatch(ViewAction.getCartView());
  }

  getCatalogView(routeParams: Params, params?: Params): void {
    this.store.dispatch(ViewAction.getCatalogView({ params, routeParams }));
  }

  getCheckoutView(): void {
    this.store.dispatch(ViewAction.getCheckoutView());
  }

  getProductView(product: SfProduct): void {
    this.store.dispatch(ViewAction.getProductView({ product }));
  }
}
