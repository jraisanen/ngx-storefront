import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ModalView } from '../../../constants/modal';
import { SfAuthService } from '../../../services/auth.service';
import { SfModalService } from '../../../services/modal.service';

@Component({
  selector: 'sf-modal-login',
  styleUrls: ['./modal-login.component.scss'],
  templateUrl: './modal-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfModalLoginComponent {
  @Output() onViewChange: EventEmitter<ModalView> = new EventEmitter<ModalView>();

  ModalView: typeof ModalView = ModalView;

  constructor(
    readonly modalService: SfModalService,
    private readonly authService: SfAuthService,
  ) {}

  onLogin(): void {
    if (!this.modalService.customer.email || !this.modalService.customer.password) {
      return;
    }

    Promise.resolve(this.authService.login(this.modalService.customer))
      .then(() => {
        this.modalService.customer = {};
        this.modalService.view = ModalView.Login;
        this.modalService.onClose();
      })
      .catch(e => console.debug(e));
  }
}
