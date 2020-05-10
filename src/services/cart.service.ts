import { Injectable } from '@angular/core';
import { SfCartAction } from '../actions/cart.action';
import { ApiPath } from '../constants/api';
import { Direction } from '../constants/cart';
import { SfCartItem } from '../models/cart-item.model';
import { SfProduct } from '../models/product.model';
import { SfCartStore } from '../stores/cart.store';
import { SfApiService } from './api.service';
import { SfStorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SfCartService {
  paymentMethods: any;
  selectedEmail = '';
  selectedPaymentMethod: any;
  shippingMethods: any;

  get totalPrice(): number {
    const { items } = this.cartStore.cart;
    return items ? items.reduce((price, item) => price + (item.price * item.qty), 0) : 0;
  }

  get totalQuantity(): number {
    const { items } = this.cartStore.cart;
    return items ? items.reduce((qty, item) => qty + item.qty, 0) : 0;
  }

  constructor(
    private readonly apiService: SfApiService,
    private readonly cartAction: SfCartAction,
    private readonly cartStore: SfCartStore,
    private readonly storageService: SfStorageService,
  ) {}

  addItem(product: SfProduct): void {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.Items}`;
    const params = { cartItem: { qty: 1, quoteId: this.storageService.cart, sku: product.sku } };
    Promise.resolve(this.apiService.postItem(path, params))
      .then(async () => this.cartAction.fetchCart())
      .catch(e => console.debug(e));
  }

  initCart(): void {
    Promise.resolve(this.apiService.postItem(ApiPath.GuestCarts, {}))
      .then(cart => {
        if (cart && typeof cart === 'string') {
          this.storageService.cart = cart;
          Promise.resolve(this.cartAction.fetchCart())
            .catch(e => console.debug(e));
        }
      })
      .catch(e => console.debug(e));
  }

  removeItem(cartItem: SfCartItem): void {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.Items}/${cartItem.id}`;
    Promise.resolve(this.apiService.deleteItem(path))
      .then(async () => this.cartAction.fetchCart())
      .catch(e => console.debug(e));
  }

  async setOrder(data: any): Promise<any> {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.PaymentInformation}`;
    const request = this.apiService.postItem(path, data);

    Promise.resolve(request)
      .then(response => Number(response) ? this.initCart() : undefined)
      .catch(e => console.debug(e));

    return request;
  }

  async setPaymentMethod(data: any): Promise<any> {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.SelectedPaymentMethod}`;
    return this.apiService.putItem(path, data);
  }

  async setShippingInformation(data: any): Promise<any> {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.ShippingInformation}`;
    const request = this.apiService.postItem(path, data);

    Promise.resolve(request)
      .then((response: any) => this.paymentMethods = response.payment_methods)
      .catch(e => console.debug(e));

    return request;
  }

  async setShippingMethods(): Promise<any> {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.ShippingMethods}`;
    const request = this.apiService.getItem(path);

    Promise.resolve(request)
      .then(shippingMethods => this.shippingMethods = shippingMethods)
      .catch(e => console.debug(e));

    return request;
  }

  updateItem(cartItem: SfCartItem, direction: Direction): void {
    const qty: number = direction === Direction.Increase ? cartItem.qty + 1 : cartItem.qty - 1;
    if (qty > 0) {
      const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.Items}/${cartItem.id}`;
      const params = { cartItem: { qty, quoteId: this.storageService.cart, sku: cartItem.sku } };
      Promise.resolve(this.apiService.putItem(path, params))
        .then(async () => this.cartAction.fetchCart())
        .catch(e => console.debug(e));
    } else {
      this.removeItem(cartItem);
    }
  }
}
