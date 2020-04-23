import { Injectable } from '@angular/core';
import { DEFAULT_MODAL_VIEW, ModalView } from '../constants/modal';
import { Customer } from '../types/customer';

@Injectable({ providedIn: 'root' })
export class SfModalService {
  isActive = false;
  customer: Partial<Customer> = {};
  view: ModalView = DEFAULT_MODAL_VIEW;

  onClose(): void {
    this.isActive = false;
    this.customer = {};
    this.view = DEFAULT_MODAL_VIEW;
  }
}
