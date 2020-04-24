import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SfCustomerAction } from '../actions/customer.action';
import { Customer } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class SfCustomerGuard implements CanActivate {
  constructor(
    private readonly customerAction: SfCustomerAction,
    private readonly router: Router,
  ) {}

  async canActivate(): Promise<boolean> {
    const customer: Customer = await this.customerAction.fetchCustomer();
    if (customer.id) {
      return true;
    }

    this.router.navigate(['/'], { replaceUrl: true })
      .catch(e => console.debug(e));

    return false;
  }
}
