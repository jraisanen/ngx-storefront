import { Injectable } from '@angular/core';
import { DEFAULT_MODAL_VIEW, ModalView } from '../constants/modal';
import { User } from '../types/user';

@Injectable({ providedIn: 'root' })
export class SfModalService {
  isActive = false;
  user: Partial<User> = {};
  view: ModalView = DEFAULT_MODAL_VIEW;

  onClose(): void {
    this.isActive = false;
    this.user = {};
    this.view = DEFAULT_MODAL_VIEW;
  }
}
