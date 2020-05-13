import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SfCartAction } from '../actions';
import { ApiPath, Direction } from '../constants';
import { SfCart, SfCartItem, SfCartModel, SfProduct } from '../models';
import { SfState } from '../reducers';
import { selectCart } from '../selectors';
import { SfPostCartItem } from '../types';
import { SfApiService } from './api.service';
import { SfStorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SfCartService {
  cart$ = this.store.select(selectCart);

  paymentMethods: any;
  selectedEmail = '';
  selectedPaymentMethod: any;
  shippingMethods: any;

  private _cart = new SfCartModel();

  get cart(): SfCart {
    return this._cart;
  }

  get cartItemsPath(): string {
    return `${this.cartPath}/${ApiPath.Items}`;
  }

  get cartPath(): string {
    return `${ApiPath.GuestCarts}/${this.storageService.cart}`;
  }

  constructor(
    private readonly apiService: SfApiService,
    private readonly cartAction: SfCartAction,
    private readonly storageService: SfStorageService,
    private readonly store: Store<SfState>,
  ) {
    this.cart$.subscribe(cart => this._cart = cart as SfCart);
  }

  addCartItem({ sku }: SfProduct, qty: number): Observable<any> {
    const params: SfPostCartItem = { cartItem: { sku, qty, quoteId: this.storageService.cart } };
    return this.apiService.postItem(this.cartItemsPath, params) as Observable<any>;
  }

  getCart(): Observable<SfCart> {
    return this.apiService.getItem(this.cartPath) as Observable<SfCart>;
  }

  initCart(): Observable<string> {
    return this.apiService.postItem(ApiPath.GuestCarts, {}) as Observable<string>;
  }

  removeCartItem({ id }: SfCartItem): Observable<any> {
    return this.apiService.deleteItem(`${this.cartItemsPath}/${id}`) as Observable<any>;
  }

  setOrder(data: any): Observable<any> {
    return this.apiService.postItem(`${this.cartPath}/${ApiPath.PaymentInformation}`, data) as Observable<any>;
  }

  setPaymentMethod(data: any): Observable<any> {
    return this.apiService.putItem(`${this.cartPath}/${ApiPath.SelectedPaymentMethod}`, data) as Observable<any>;
  }

  setShippingInformation(data: any): Observable<any> {
    return this.apiService.postItem(`${this.cartPath}/${ApiPath.ShippingInformation}`, data) as Observable<any>;
  }

  setShippingMethods(): Observable<any> {
    return this.apiService.getItem(`${this.cartPath}/${ApiPath.ShippingMethods}`) as Observable<any>;
  }

  totalPrice({ items }: SfCart): number {
    return items?.reduce((price, item) => price + (item.price * item.qty), 0) || 0;
  }

  totalQuantity({ items }: SfCart): number {
    return items?.reduce((qty, item) => qty + item.qty, 0) || 0;
  }

  updateCartItem({ id, sku }: SfCartItem, qty: number): Observable<any> {
    const params = { cartItem: { sku, qty, quoteId: this.storageService.cart } };
    return this.apiService.putItem(`${this.cartItemsPath}/${id}`, params) as Observable<any>;
  }

  updateItem(cartItem: SfCartItem, direction: Direction): void {
    const qty: number = direction === Direction.Increase ? cartItem.qty + 1 : cartItem.qty - 1;
    if (qty > 0) {
      this.cartAction.updateCartItem({ cartItem, qty });
    } else {
      this.cartAction.removeCartItem({ cartItem });
    }
  }
}
