import { Injectable } from '@angular/core';
import { SfCartAction } from '../actions/cart.action';
import { ApiPath } from '../constants/api';
import { CheckoutStep, Direction } from '../constants/cart';
import { SfCartStore } from '../stores/cart.store';
import { CartItem } from '../types/cart';
import { Product } from '../types/product';
import { SfApiService } from './api.service';
import { SfStorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SfCartService {
  checkoutStep: CheckoutStep = CheckoutStep.Address;
  paymentMethods: any;
  shippingMethods: any;

  get totalPrice(): number {
    return this.cartStore.cart.items ? this.cartStore.cart.items.reduce((price, item) => price + (item.price * item.qty), 0) : 0;
  }

  get totalQuantity(): number {
    return this.cartStore.cart.items ? this.cartStore.cart.items.reduce((qty, item) => qty + item.qty, 0) : 0;
  }

  constructor(
    private readonly apiService: SfApiService,
    private readonly cartAction: SfCartAction,
    private readonly cartStore: SfCartStore,
    private readonly storageService: SfStorageService,
  ) {
    Promise.resolve(this.cartAction.fetchCart())
      .catch(e => console.debug(e));
  }

  addItem(product: Product): void {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.Items}`;
    const params = { cartItem: { qty: 1, quoteId: this.storageService.cart, sku: product.sku } };
    Promise.resolve(this.apiService.postItem(path, params))
      .then(() => this.cartAction.fetchCart())
      .catch(e => console.debug(e));
  }

  initCart(): void {
    Promise.resolve(this.apiService.postItem(ApiPath.GuestCarts, {}) as Promise<string>)
      .then(cart => {
        this.storageService.cart = cart;
        Promise.resolve(this.cartAction.fetchCart())
          .catch(e => console.debug(e));
      })
      .catch(e => console.debug(e));
  }

  removeItem(cartItem: CartItem): void {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.Items}/${cartItem.item_id}`;
    Promise.resolve(this.apiService.deleteItem(path))
      .then(() => this.cartAction.fetchCart())
      .catch(e => console.debug(e));
  }

  setOrder(data: any): void {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.PaymentInformation}`;
    Promise.resolve(this.apiService.postItem(path, data))
      .then(response => Number(response) ? this.initCart() : undefined)
      .catch(e => console.debug(e));
  }

  setPaymentMethod(data: any): void {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.SelectedPaymentMethod}`;
    Promise.resolve(this.apiService.putItem(path, data))
      .then(response => Number(response) ? this.checkoutStep = CheckoutStep.Review : undefined)
      .catch(e => console.debug(e));
  }

  setShippingInformation(data: any): void {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.ShippingInformation}`;
    Promise.resolve(this.apiService.postItem(path, data))
      .then((response: any) => this.paymentMethods = response.payment_methods)
      .catch(e => console.debug(e));
  }

  setShippingMethods(): void {
    const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.ShippingMethods}`;
    Promise.resolve(this.apiService.getItem(path))
      .then(shippingMethods => this.shippingMethods = shippingMethods)
      .catch(e => console.debug(e));
  }

  updateItem(cartItem: CartItem, direction: Direction): void {
    const qty: number = direction === Direction.Increase ? cartItem.qty + 1 : cartItem.qty - 1;
    if (qty > 0) {
      const path = `${ApiPath.GuestCarts}/${this.storageService.cart}/${ApiPath.Items}/${cartItem.item_id}`;
      const params = { cartItem: { qty, quoteId: this.storageService.cart, sku: cartItem.sku } };
      Promise.resolve(this.apiService.putItem(path, params))
        .then(() => this.cartAction.fetchCart())
        .catch(e => console.debug(e));
    } else {
      this.removeItem(cartItem);
    }
  }
}
