import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SfCustomerAction } from '../actions/customer.action';
import { ApiPath } from '../constants/api';
import { SfCustomerStore } from '../stores/customer.store';
import { Customer } from '../types/customer';
import { SfApiService } from './api.service';
import { SfStorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SfAuthService {
  constructor(
    private readonly apiService: SfApiService,
    private readonly customerAction: SfCustomerAction,
    private readonly customerStore: SfCustomerStore,
    private readonly router: Router,
    private readonly storageService: SfStorageService,
  ) {}

  login(customer: Partial<Customer>): Promise<string> {
    const params = { username: customer.email, password: customer.password };
    const request = this.apiService.postItem(ApiPath.CustomersLogin, params) as Promise<string>;

    Promise.resolve(request)
      .then(accessToken => {
        if (accessToken && typeof accessToken === 'string') {
          this.storageService.accessToken = accessToken;
          Promise.resolve(this.customerAction.fetchCustomer())
            .catch(e => console.debug(e));
        }
      })
      .catch(e => console.debug(e));

    return request;
  }

  logout(): void {
    const headers = this.storageService.accessToken
      ? { Authorization: `Bearer ${this.storageService.accessToken}` }
      : {};
    Promise.resolve(this.apiService.postItem(ApiPath.CustomersLogout, {}, headers))
      .then(hasLoggedOut => {
        if (hasLoggedOut) {
          this.router.navigate(['/'], { replaceUrl: true })
            .then(() => {
              this.storageService.accessToken = '';
              this.customerStore.customer = {} as Customer;
            })
            .catch(e => console.debug(e));
        }
      })
      .catch(e => console.debug(e));
  }

  register(customer: Partial<Customer>): Promise<Customer> {
    return this.apiService.postItem(ApiPath.CustomersRegister, customer) as Promise<Customer>;
  }
}
