import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SfFormRadioComponent } from './form-radio/form-radio.component';
import { SfFormTextComponent } from './form-text/form-text.component';

@NgModule({
  declarations: [SfFormRadioComponent, SfFormTextComponent],
  exports: [SfFormRadioComponent, SfFormTextComponent],
  imports: [CommonModule, FormsModule],
})
export class SfFormModule {}
