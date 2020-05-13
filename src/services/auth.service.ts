import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPath } from '../constants';
import { SfCustomer } from '../models';
import { SfApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class SfAuthService {
  constructor(
    private readonly apiService: SfApiService,
  ) {}

  login(customer: Partial<SfCustomer>): Observable<string> {
    const params = { username: customer.email, password: customer.password };
    return this.apiService.postItem(ApiPath.CustomersLogin, params) as Observable<string>;
  }

  logout(): Observable<boolean> {
    return this.apiService.postItem(ApiPath.CustomersLogout, {}, this.apiService.authHeaders) as Observable<boolean>;
  }

  register(customer: Partial<SfCustomer>): Observable<SfCustomer> {
    return this.apiService.postItem(ApiPath.CustomersRegister, customer) as Observable<SfCustomer>;
  }
}
