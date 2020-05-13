import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { SfCartItem, SfProduct } from '../models';
import { SfState } from '../reducers';

export enum CartActionType {
  AddCartItem = '[Cart] Add Cart Item',
  GetCart = '[Cart] Get Cart',
  InitCart = '[Cart] Init Cart',
  RemoveCartItem = '[Cart] Remove Cart Item',
  SetOrder = '[Cart] Set Order',
  SetPaymentMethod = '[Cart] Set Payment Method',
  SetShippingInformation = '[Cart] Set Shipping Information',
  SetShippingMethods = '[Cart] Set Shipping Methods',
  UpdateCartItem = '[Cart] Update Cart Item',
}

interface AddCartItemParams {
  product: SfProduct;
}

interface CartParams {
  data: any;
}

interface CartItemParams {
  cartItem: SfCartItem;
}

interface UpdateCartItemParams extends CartItemParams {
  qty: number;
}

export const CartAction = {
  addCartItem: createAction(CartActionType.AddCartItem, props<AddCartItemParams>()),
  getCart: createAction(CartActionType.GetCart),
  initCart: createAction(CartActionType.InitCart),
  removeCartItem: createAction(CartActionType.RemoveCartItem, props<CartItemParams>()),
  setOrder: createAction(CartActionType.SetOrder, props<CartParams>()),
  setPaymentMethod: createAction(CartActionType.SetPaymentMethod, props<CartParams>()),
  setShippingInformation: createAction(CartActionType.SetShippingInformation, props<CartParams>()),
  setShippingMethods: createAction(CartActionType.SetShippingMethods),
  updateCartItem: createAction(CartActionType.UpdateCartItem, props<UpdateCartItemParams>()),
}

@Injectable({ providedIn: 'root' })
export class SfCartAction {
  constructor(
    private readonly store: Store<SfState>,
  ) {}

  addCartItem(params: AddCartItemParams): void {
    this.store.dispatch(CartAction.addCartItem(params));
  }

  getCart(): void {
    this.store.dispatch(CartAction.getCart());
  }

  initCart(): void {
    this.store.dispatch(CartAction.initCart());
  }

  removeCartItem(params: CartItemParams): void {
    this.store.dispatch(CartAction.removeCartItem(params));
  }

  setOrder(params: CartParams): void {
    this.store.dispatch(CartAction.setOrder(params));
  }

  setPaymentMethod(params: CartParams): void {
    this.store.dispatch(CartAction.setPaymentMethod(params));
  }

  setShippingInformation(params: CartParams): void {
    this.store.dispatch(CartAction.setShippingInformation(params));
  }

  setShippingMethods(): void {
    this.store.dispatch(CartAction.setShippingMethods());
  }

  updateCartItem(params: UpdateCartItemParams): void {
    this.store.dispatch(CartAction.updateCartItem(params));
  }
}
