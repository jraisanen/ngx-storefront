import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalView } from '../../../constants/modal';
import { User } from '../../../types/user';
import { SfAuthService } from '../../../services/auth.service';
import { SfModalService } from '../../../services/modal.service';

@Component({
  selector: 'sf-modal-register',
  styleUrls: ['./modal-register.component.scss'],
  templateUrl: './modal-register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfModalRegisterComponent {
  @Output() onViewChange: EventEmitter<ModalView> = new EventEmitter<ModalView>();

  ModalView: typeof ModalView = ModalView;

  constructor(
    readonly modalService: SfModalService,
    private readonly authService: SfAuthService,
  ) {}

  async onRegister(registerForm: NgForm): Promise<void> {
    console.debug(registerForm);
    if (!this.modalService.user.email || !this.modalService.user.password) {
      console.debug('Please enter email and password.');
      return;
    }
    try {
      const user: User = await this.authService.register(this.modalService.user);
      this.modalService.user = {};
      if (!user.email) {
        console.debug(user);
        return;
      }
      this.modalService.view = ModalView.Login;
    } catch (e) {
      console.debug(e);
    }
  }
}
