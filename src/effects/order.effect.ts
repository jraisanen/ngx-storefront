import { Injectable } from '@angular/core';
import { item } from '@jraisanen/ngx-core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ItemAction, OrderActionType } from '../actions';
import { SfOrderModel } from '../models';
import { SfOrderService } from '../services';

@Injectable()
export class OrderEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly orderService: SfOrderService,
  ) {}

  @Effect() getOrder$ = (): Observable<Action> => this.actions$.pipe(
    ofType(OrderActionType.GetOrder),
    mergeMap(({ order }) => this.orderService.getOrder(order).pipe(
      map(order => new SfOrderModel(item(order))),
      map(order => ItemAction.getSuccess({ order })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getOrders$ = (): Observable<Action> => this.actions$.pipe(
    ofType(OrderActionType.GetOrders),
    mergeMap(({ params }) => this.orderService.getOrders(params).pipe(
      map(orders => orders.map(order => new SfOrderModel(order))),
      map(orders => ItemAction.getSuccess({ orders })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );
}
