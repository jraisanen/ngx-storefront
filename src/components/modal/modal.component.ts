import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalView } from '../../constants/modal';
import { SfModalService } from '../../services/modal.service';

@Component({
  selector: 'sf-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfModalComponent {
  ModalView: typeof ModalView = ModalView;

  constructor(
    readonly modalService: SfModalService,
  ) {}

  onViewChange(view: ModalView): void {
    this.modalService.customer = {};
    this.modalService.view = view;
  }
}
