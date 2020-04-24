import { Injectable } from '@angular/core';
import { DEFAULT_MODAL_VIEW, ModalView } from '../constants/modal';
import { SfCustomer } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class SfModalService {
  isActive = false;
  customer: Partial<SfCustomer> = {};
  view: ModalView = DEFAULT_MODAL_VIEW;

  onClose(): void {
    this.isActive = false;
    this.customer = {};
    this.view = DEFAULT_MODAL_VIEW;
  }
}
