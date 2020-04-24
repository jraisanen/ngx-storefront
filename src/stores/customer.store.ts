import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class SfCustomerStore {
  private readonly _customer$: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(new Customer());

  readonly customer$: Observable<Customer> = this._customer$.asObservable();

  get customer(): Customer {
    return this._customer$.getValue();
  }

  set customer(customer: Customer) {
    this._customer$.next(new Customer(customer));
  }
}
