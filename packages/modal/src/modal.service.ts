import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  data: any = {};
  isActive = false;
  view: any = {};

  onClose(): void {
    this.data = {};
    this.isActive = false;
    this.view = {};
  }
}
