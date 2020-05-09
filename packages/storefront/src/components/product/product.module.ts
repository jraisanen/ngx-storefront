import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentModule } from '@jraisanen/ngx-elements';
import { SfProductComponent } from './product.component';

@NgModule({
  declarations: [SfProductComponent],
  exports: [SfProductComponent],
  imports: [CommonModule, RouterModule, ContentModule],
})
export class SfProductModule {}
