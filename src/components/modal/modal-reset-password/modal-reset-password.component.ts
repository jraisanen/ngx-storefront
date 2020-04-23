import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalView } from '../../../constants/modal';
import { SfModalService } from '../../../services/modal.service';

@Component({
  selector: 'sf-modal-reset-password',
  styleUrls: ['./modal-reset-password.component.scss'],
  templateUrl: './modal-reset-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfModalResetPasswordComponent {
  @Output() onViewChange: EventEmitter<ModalView> = new EventEmitter<ModalView>();

  ModalView: typeof ModalView = ModalView;

  constructor(
    readonly modalService: SfModalService,
  ) {}

  onResetPassword(resetPasswordForm: NgForm): void {
    console.debug(resetPasswordForm);
    console.debug('reset password', this.modalService.customer);
  }
}
