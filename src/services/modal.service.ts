import { Injectable } from '@angular/core';
import { DEFAULT_MODAL_VIEW, ModalView } from '../constants/modal';
import { SfCustomer, SfCustomerModel } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class SfModalService {
  customer: SfCustomer = new SfCustomerModel();
  isActive = false;
  view: ModalView = DEFAULT_MODAL_VIEW;

  onClose(): void {
    this.customer = new SfCustomerModel();
    this.isActive = false;
    this.view = DEFAULT_MODAL_VIEW;
  }
}
