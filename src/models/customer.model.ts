import { number, string } from '@jraisanen/ngx-core';

export class SfCustomerModel {
  readonly id: number = 0;
  readonly firstName: string = '';
  readonly lastName: string = '';
  readonly phone: string = '';
  readonly email: string = '';
  readonly username: string = '';
  readonly password: string = '';

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = number(data.id);
    this.firstName = string(data.firstname);
    this.lastName = string(data.lastname);
    this.phone = string(data.phone);
    this.email = string(data.email);
    this.username = string(data.username);
    this.password = string(data.password);
  }
}

export type SfCustomer = SfCustomerModel;
