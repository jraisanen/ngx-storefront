import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { createAction, props, Store } from '@ngrx/store';
import { LoadMore } from '../constants';
import { SfOrder } from '../models';
import { SfState } from '../reducers';

export enum OrderActionType {
  GetOrder = '[Order] Get Order',
  GetOrders = '[Order] Get Orders',
}

interface OrderParams {
  order: SfOrder;
}

interface GetOrdersParams extends LoadMore {
  params: Params;
}

export const OrderAction = {
  getOrder: createAction(OrderActionType.GetOrder, props<OrderParams>()),
  getOrders: createAction(OrderActionType.GetOrders, props<GetOrdersParams>()),
}

@Injectable({ providedIn: 'root' })
export class SfOrderAction {
  constructor(
    private readonly store: Store<SfState>,
  ) {}

  getOrder(params: OrderParams): void {
    this.store.dispatch(OrderAction.getOrder(params));
  }

  getOrders(params: GetOrdersParams): void {
    this.store.dispatch(OrderAction.getOrders(params));
  }
}
