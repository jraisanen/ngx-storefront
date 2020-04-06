import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  async onLogin(loginForm: NgForm): Promise<void> {
    console.debug(loginForm);
    if (!this.modalService.user.email || !this.modalService.user.password) {
      console.debug('Please enter email and password.');
      return;
    }
    try {
      await this.authService.login(this.modalService.user);
      this.modalService.user = {};
      this.modalService.view = ModalView.Login;
      this.modalService.onClose();
    } catch (e) {
      console.debug(e);
    }
  }
}
