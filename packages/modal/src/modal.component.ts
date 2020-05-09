import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'ngx-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  constructor(
    readonly modalService: ModalService,
  ) {}
}
