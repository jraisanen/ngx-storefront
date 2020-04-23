import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../types/customer';

@Injectable({ providedIn: 'root' })
export class SfCustomerStore {
  private readonly _customer$: BehaviorSubject<Customer> = new BehaviorSubject<Customer>({} as Customer);

  readonly customer$: Observable<Customer> = this._customer$.asObservable();

  get customer(): Customer {
    return this._customer$.getValue();
  }

  set customer(customer: Customer) {
    this._customer$.next(customer);
  }
}
