import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ModalView } from '../../../constants/modal';
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

  onRegister(): void {
    const { email, firstName, lastName, password } = this.modalService.customer;
    if (!email || !firstName || !lastName || !password) {
      return;
    }
    const newCustomer = {
      customer: { email, firstname: firstName, lastname: lastName },
      password: this.modalService.customer.password,
    }

    Promise.resolve(this.authService.register(newCustomer))
      .then(() => {
        this.modalService.customer = {};
        this.modalService.view = ModalView.Login;
      })
      .catch(e => console.debug(e));
  }
}
