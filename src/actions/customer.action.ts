import { Injectable } from '@angular/core';
import { ApiPath } from '../constants/api';
import { SfApiService } from '../services/api.service';
import { SfMetaService } from '../services/meta.service';
import { SfCustomerStore } from '../stores/customer.store';
import { Customer } from '../types/customer';
import { SfStorageService } from '../services/storage.service';

@Injectable({ providedIn: 'root' })
export class SfCustomerAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly customerStore: SfCustomerStore,
    private readonly metaService: SfMetaService,
    private readonly storageService: SfStorageService,
  ) {}

  fetchCustomer(): Promise<Customer> {
    const headers = this.storageService.accessToken
      ? { Authorization: `Bearer ${this.storageService.accessToken}` }
      : {};
    const request = this.apiService.getItem(ApiPath.CustomersMe, headers) as Promise<Customer>;

    Promise.resolve(request)
      .then(customer => this.customerStore.customer = customer)
      .catch(e => console.debug(e));

    return request;
  }
}
