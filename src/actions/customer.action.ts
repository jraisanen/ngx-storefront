import { Injectable } from '@angular/core';
import { ApiPath } from '../constants/api';
import { SfApiService } from '../services/api.service';
import { SfCustomerStore } from '../stores/customer.store';
import { Customer } from '../types/customer';

@Injectable({ providedIn: 'root' })
export class SfCustomerAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly customerStore: SfCustomerStore,
  ) {}

  fetchCustomer(): Promise<Customer> {
    const request = this.apiService.getItem(ApiPath.CustomersMe, this.apiService.authHeaders) as Promise<Customer>;

    Promise.resolve(request)
      .then(customer => this.customerStore.customer = customer)
      .catch(e => console.debug(e));

    return request;
  }
}
