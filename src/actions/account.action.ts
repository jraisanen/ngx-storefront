import { Injectable } from '@angular/core';
import { META } from '../constants/meta';
import { SfMetaService } from '../services/meta.service';
import { Customer } from '../types/customer';
import { SfCustomerAction } from './customer.action';

@Injectable({ providedIn: 'root' })
export class SfAccountAction {
  constructor(
    private readonly metaService: SfMetaService,
    private readonly customerAction: SfCustomerAction,
  ) {}

  fetchView(): Promise<Customer> {
    const request = this.customerAction.fetchCustomer() as Promise<Customer>;

    Promise.resolve(request)
      .then(() => this.metaService.data = META.account)
      .catch(e => console.debug(e));

    return request;
  }
}
