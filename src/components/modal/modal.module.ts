import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SfFormModule } from '../form/form.module';
import { SfModalLoginComponent } from './modal-login/modal-login.component';
import { SfModalRegisterComponent } from './modal-register/modal-register.component';
import { SfModalResetPasswordComponent } from './modal-reset-password/modal-reset-password.component';
import { SfModalComponent } from './modal.component';

@NgModule({
  declarations: [SfModalComponent, SfModalLoginComponent, SfModalRegisterComponent, SfModalResetPasswordComponent],
  exports: [SfModalComponent, SfModalLoginComponent, SfModalRegisterComponent, SfModalResetPasswordComponent],
  imports: [CommonModule, SfFormModule, FormsModule],
})
export class SfModalModule {}
