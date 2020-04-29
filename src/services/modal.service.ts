import { Injectable } from '@angular/core';
import { DEFAULT_MODAL_VIEW, ModalView } from '../constants/modal';
import { ModalData } from '../types/modal';

@Injectable({ providedIn: 'root' })
export class SfModalService {
  data: ModalData = {};
  isActive = false;
  view: ModalView = DEFAULT_MODAL_VIEW;

  onClose(): void {
    this.data = {};
    this.isActive = false;
    this.view = DEFAULT_MODAL_VIEW;
  }
}
