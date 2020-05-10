import { Injectable } from '@angular/core';
import { META } from '../constants/meta';
import { SfCustomer } from '../models/customer.model';
import { SfMetaService } from '../services/meta.service';
import { SfCustomerAction } from './customer.action';

@Injectable({ providedIn: 'root' })
export class SfAccountAction {
  constructor(
    private readonly customerAction: SfCustomerAction,
    private readonly metaService: SfMetaService,
  ) {}

  async fetchView(): Promise<SfCustomer> {
    const request = this.customerAction.fetchCustomer();

    Promise.resolve(request)
      .then(() => this.metaService.data = META.account)
      .catch(e => console.debug(e));

    return request;
  }
}
