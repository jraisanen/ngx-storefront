import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfCustomer, SfCustomerModel } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class SfCustomerStore {
  readonly customer$: Observable<SfCustomer>;

  private readonly _customer$: BehaviorSubject<SfCustomer> = new BehaviorSubject<SfCustomer>(new SfCustomerModel());

  constructor() {
    this.customer$ = this._customer$.asObservable();
  }

  get customer(): SfCustomer {
    return this._customer$.getValue();
  }

  set customer(customer: SfCustomer) {
    this._customer$.next(new SfCustomerModel(customer));
  }
}
