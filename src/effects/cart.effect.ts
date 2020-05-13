import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { item } from '@jraisanen/ngx-core';
import { CartActionType, ItemAction, SfCartAction } from '../actions';
import { SfCartModel } from '../models';
import { SfCartService, SfStorageService } from '../services';

@Injectable()
export class CartEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly cartAction: SfCartAction,
    private readonly cartService: SfCartService,
    private readonly router: Router,
    private readonly storageService: SfStorageService,
  ) {}

  @Effect() addCartItem$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.AddCartItem),
    tap(({ product }) => this.cartService.addCartItem(product, 1).pipe(
      map(() => this.cartAction.getCart()),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getCart$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.GetCart),
    mergeMap(() => this.cartService.getCart().pipe(
      map(cart => new SfCartModel(item(cart))),
      map(cart => {
        if (!cart.id) {
          this.cartAction.initCart();
        }
        return ItemAction.getSuccess({ cart });
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() initCart$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.InitCart),
    tap(() => this.cartService.initCart().pipe(
      map((cart) => {
        if (cart && typeof cart === 'string') {
          this.storageService.cart = cart;
          this.cartAction.getCart();
        }
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() removeCartItem$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.RemoveCartItem),
    tap(({ cartItem }) => this.cartService.removeCartItem(cartItem).pipe(
      map(() => this.cartAction.getCart()),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() setOrder$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.SetOrder),
    tap(({ data }) => this.cartService.setOrder(data).pipe(
      map(response => {
        if (Number(response)) {
          this.cartAction.initCart();
        }
        this.router.navigate(['checkout', 'success']);
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() setPaymentInformation$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.SetPaymentMethod),
    tap(({ data }) => this.cartService.setPaymentMethod(data).pipe(
      map(async () => this.router.navigate(['checkout', 'review'])),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() setShippingInformation$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.SetShippingInformation),
    mergeMap(({ data }) => this.cartService.setShippingInformation(data).pipe(
      map(({ payment_methods }) => ItemAction.getSuccess({ paymentMethods: payment_methods })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() setShippingMethods$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.SetShippingMethods),
    mergeMap(() => this.cartService.setShippingMethods().pipe(
      map((shippingMethods) => ItemAction.getSuccess({ shippingMethods })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() updateCartItem$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CartActionType.UpdateCartItem),
    tap(({ cartItem, qty }) => this.cartService.updateCartItem(cartItem, qty).pipe(
      map(() => this.cartAction.getCart()),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );
}
