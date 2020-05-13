import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SfCustomer } from '../models';
import { SfCustomerService } from '../services';

@Injectable({ providedIn: 'root' })
export class SfCustomerGuard implements CanActivate {
  constructor(
    private readonly customerService: SfCustomerService,
    private readonly router: Router,
  ) {}

  async canActivate(): Promise<boolean> {
    const customer: SfCustomer = await this.customerService.getCustomer().toPromise();
    if (customer.id) {
      return true;
    }

    this.router.navigate(['/'], { replaceUrl: true })
      .catch(e => console.debug(e));

    return false;
  }
}
