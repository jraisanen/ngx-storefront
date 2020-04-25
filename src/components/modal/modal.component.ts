import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SfModalService } from '../../services/modal.service';

@Component({
  selector: 'sf-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfModalComponent {
  constructor(
    readonly modalService: SfModalService,
  ) {}
}
