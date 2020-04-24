import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SfCustomerAction } from '../actions/customer.action';
import { ApiPath } from '../constants/api';
import { SfCustomer } from '../models/customer.model';
import { SfCustomerStore } from '../stores/customer.store';
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

  login(customer: Partial<SfCustomer>): Promise<string> {
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
    Promise.resolve(this.apiService.postItem(ApiPath.CustomersLogout, {}, this.apiService.authHeaders))
      .then(hasLoggedOut => {
        if (hasLoggedOut) {
          this.router.navigate(['/'], { replaceUrl: true })
            .then(() => {
              this.storageService.accessToken = '';
              this.customerStore.customer = {} as SfCustomer;
            })
            .catch(e => console.debug(e));
        }
      })
      .catch(e => console.debug(e));
  }

  register(customer: Partial<SfCustomer>): Promise<SfCustomer> {
    return this.apiService.postItem(ApiPath.CustomersRegister, customer) as Promise<SfCustomer>;
  }
}
