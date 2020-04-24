import { Injectable } from '@angular/core';
import { META } from '../constants/meta';
import { Customer } from '../models/customer.model';
import { SfMetaService } from '../services/meta.service';
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
