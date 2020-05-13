import { Injectable } from '@angular/core';
import { createAction, Store } from '@ngrx/store';
import { SfState } from '../reducers';

export enum CustomerActionType {
  GetCustomer = '[Customer] Get Customer',
}

export const CustomerAction = {
  getCustomer: createAction(CustomerActionType.GetCustomer),
}

@Injectable({ providedIn: 'root' })
export class SfCustomerAction {
  constructor(
    private readonly store: Store<SfState>,
  ) {}

  getCustomer(): void {
    this.store.dispatch(CustomerAction.getCustomer());
  }
}
