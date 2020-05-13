import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPath } from '../constants';
import { SfCustomer, SfCustomerModel } from '../models';
import { SfState } from '../reducers';
import { selectCustomer } from '../selectors';
import { SfApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class SfCustomerService {
  customer$ = this.store.select(selectCustomer);

  private _customer = new SfCustomerModel();

  get customer(): SfCustomer {
    return this._customer;
  }

  constructor(
    private readonly apiService: SfApiService,
    private readonly store: Store<SfState>,
  ) {
    this.customer$.subscribe(customer => this._customer = customer as SfCustomer);
  }

  getCustomer(): Observable<SfCustomer> {
    return this.apiService.getItem(ApiPath.CustomersMe, this.apiService.authHeaders) as Observable<SfCustomer>;
  }
}
