import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextComponent } from './form-text/form-text.component';

@NgModule({
  declarations: [FormRadioComponent, FormSelectComponent, FormTextComponent],
  exports: [FormRadioComponent, FormSelectComponent, FormTextComponent],
  imports: [CommonModule, FormsModule],
})
export class FormModule {}

export * from './form-select/form-select.types';
