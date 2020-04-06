import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SfContentModule } from '../content/content.module';
import { SfProductComponent } from './product.component';

@NgModule({
  declarations: [SfProductComponent],
  exports: [SfProductComponent],
  imports: [CommonModule, RouterModule, SfContentModule],
})
export class SfProductModule {}
